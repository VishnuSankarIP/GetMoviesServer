const jsonServer=require('json-server')
const GMServer=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT=3000 || process.env.PORT

GMServer.use(middleware)
GMServer.use(router)


GMServer.listen(PORT,()=>{
    console.log(`GET MOVIE Server started at port${PORT}`);
})
