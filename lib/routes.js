
/*
FlowRouter.route('/',{
    name : 'home',
    action(){
        BlazeLayout.render('HomeLayout');
    }
});
*/
FlowRouter.route('/',{
    name : 'Home',
    action(){
        BlazeLayout.render('MainLayout',{main:'test'});
    }
});