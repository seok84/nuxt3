// server/middleware/healthcheck.js

export default defineEventHandler((event) => {
    //log.debug("asdfasdf", {name: 'ddddd'})
    if (event.node.req.url === '/healthcheck') {
        event.node.res.setHeader('Content-Type', 'application/json');
        return {
            status: "OK",
            message: "서버가 정상적으로 작동하고 있습니다."
        };
    }
});
