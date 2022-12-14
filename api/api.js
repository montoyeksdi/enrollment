const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

router.get('/', (ctx, next) => {
console.log(ctx.request);
ctx.body = "Hello World"
});

router.get('/getStudents', (ctx, next) => {
console.log(ctx.request);
ctx.body = [
{
fname: 'Anna',
lname: 'Smith'
},
{
fname: 'John',
lname: 'Smith'
},
{
fname: 'Mark',
lname: 'Smith'
}
]
});

app.use(router.routes())

app.listen(3001, function(){
console.log('Server running on http://localhost:3001&#39');
});