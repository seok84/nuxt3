import { defineNuxtPlugin } from "#app";
import { defineRule, configure, ErrorMessage } from "vee-validate";
import { required, email, min, max, between, alpha_num, numeric, digits, confirmed } from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
	configure({
		bails: false,
		generateMessage: ({ field, rule }) => {
			const messages = {
				required: "필수 입력 항목입니다.",
				numeric: "숫자로만 입력해주세요",
				confirmed: "비밀번호가 일치하지 않습니다.",
				alpha_num: "영문,숫자 조합으로 입력해 주세요.",
			};
			return rule && messages[rule.name] ? messages[rule.name] : `${field} 값이 올바르지 않습니다!`;
		},
	});

	// defineRule()을 사용할 때, rules 객체 전체를 루프 돌리지 말고 필요한 것만 개별적으로 등록

	defineRule("required", required);
	defineRule("email", email);
	defineRule("min", min);
	defineRule("max", max);
	defineRule("numeric", numeric);
	defineRule("digits", digits);
	defineRule("between", between);
	defineRule("alpha_num", alpha_num);
	defineRule("confirmed", confirmed);

	//커스텀 규칙 추가

	//숫자
	defineRule("max", (value, length) => {
		if (value > length) {
			return `${length}자 이내로 입력해주세요.`;
		}
		return true;
	});

	defineRule("digits", (value, length) => {
		if (value.length !== length) {
			return `${length} 자리로 입력해 주세요.`;
		}
		return true;
	});

	defineRule("between", (value, [min, max]) => {
		if (!value || !value.length) {
			return true;
		}
		const numericValue = Number(value);
		if (numericValue < min) {
			return `${min}~${max}자 이내로 입력해 주세요.`;
		}
		if (numericValue > max) {
			return `${min}~${max}자 이내로 입력해 주세요.`;
		}
		return true;
	});

	//이메일
	defineRule("email", (value) => {
		if (!value || !value.length) {
			return true;
		}

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			return "사용불가능한 이메일 주소입니다.";
		}
		return true;
	});

	//비밀번호
	defineRule("confirmed", (value, [target], ctx) => {
		if (value !== ctx.form[target]) {
			return "비밀번호가 일치하지 않습니다.";
		}
		return true;
	});

	defineRule("password1", (value) => {
		if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?~&])\S{10,16}$/.test(value)) {
			return `영문/숫자/특수문자(공백제외)를 혼합하여 10자 이상 16자 이하로 입력하세요.`;
		}
		return true;
	});

	defineRule("password2", (value) => {
		const duplicateCount = 3;

		let arrayValue = value.split("");
		const length = arrayValue.length;
		let regExp;

		for (let i = 0; i < length; i++) {
			let char = arrayValue[i];
			if (/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim.test(char)) {
				char = "\\" + char;
			}

			var pattern = "";
			for (var j = 0; j < duplicateCount; j++) {
				pattern += char;
			}

			regExp = new RegExp(pattern);

			if (regExp.test(value)) {
				return "3자리 이상 반복된 문자, 숫자는 사용이 불가합니다.";
			}
		}
		return true;
	});

	// password2 규칙이 우선시 되고 중복됨
	// defineRule("password3", (value) => {
	// 	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	// 	const numbers = "0123456789";
	// 	const custom = "1q2w3e4r5t6y7u8i9o0p1qaz2wsx";
	// 	const consecutiveSize = 3;

	// 	for (let i = 0; i < value.length - consecutiveSize; i++) {
	// 		let data = value.substring(i, i + consecutiveSize);

	// 		if (alphabet.indexOf(data) > -1) {
	// 			return `비밀번호에 4자리 이상 연속된 문자는 사용할 수 없습니다.`;
	// 		}

	// 		if (numbers.indexOf(data) > -1) {
	// 			return `비밀번호에 4자리 이상 연속된 문자는 사용할 수 없습니다.`;
	// 		}
	// 		if (custom.indexOf(data) > -1) {
	// 			return `비밀번호에 4자리 이상 연속된 문자는 사용할 수 없습니다.`;
	// 		}
	// 	}
	// 	return true;
	// });

	//아이디
	defineRule("loginId", (value) => {
		if (value && /^(?=.*[a-z])[a-z0-9]{4,16}$/.test(value)) {
			return true;
		} else {
			return "4~16자 이내 영문 소문자, 숫자로 입력해 주세요.";
		}
	});

	//사업자
	defineRule("businessNumber", (value) => {
        if(value){
            let flag = false;
            let number = value;
    
            if (!number) return false;
    
            if (number) {
                var numberMap = number.split("").map(function (d) {
                    return parseInt(d, 10);
                });
    
                if (numberMap.length === 10) {
                    var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
                    var chk = 0;
    
                    keyArr.forEach(function (d, i) {
                        chk += d * numberMap[i];
                    });
    
                    chk += parseInt((keyArr[8] * numberMap[8]) / 10, 10);
                    flag = Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10;
    
                    if (flag) {
                        return true;
                    } else {
                        return `사업자등록번호를 '-'없이 정확히 입력해주세요.`;
                    }
                }
            }
        }
	});

	//전화번보
	defineRule("phoneNumber", (value) => {
		// 값이 없을 경우 바로 검증 통과 (빈 값은 required 규칙에서 처리)
		if (!value) return "휴대폰번호를 입력해주세요.";

		// 공백과 하이픈을 제거 (value가 항상 문자열이어야 함)
		const cleanedNumber = String(value).replace(/[\s-]/g, "");

		// 전화번호 정규 표현식
		const localNumber =
			/^(02\d{7,8}|031\d{7,8}|032\d{7,8}|033\d{7,8}|041\d{7,8}|042\d{7,8}|043\d{7,8}|044\d{7,8}|051\d{7,8}|052\d{7,8}|053\d{7,8}|054\d{7,8}|055\d{7,8}|061\d{7,8}|062\d{7,8}|063\d{7,8}|064\d{7,8}|070\d{8})$/;
		const mobileNumber = /^010\d{4}\d{4}$/;
		const oldMobileNumber = /^(011|016|017|018|019)\d{7}$/;
		const internetNumber = /^050[5|7]\d{6}$/;

		// 전화번호 검증
		let result =
			(localNumber.test(cleanedNumber) ||
				mobileNumber.test(cleanedNumber) ||
				oldMobileNumber.test(cleanedNumber) ||
				internetNumber.test(cleanedNumber)) &&
			cleanedNumber.length >= 9 &&
			cleanedNumber.length <= 11;

		return result ? true : "휴대폰번호를 정확히 입력해주세요.";
	});

	//체크박스

	// ErrorMessage 전역 등록
	nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);
});
