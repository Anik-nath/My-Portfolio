const secretFunction = () => {
    document.addEventListener('contextmenu',function(stop){
        stop.preventDefault();
    })
};
export default secretFunction;