class Pull_To_Reload {
    state = true;
    PositionStartY = 0;
    PositionCurrentY = 0;
    refreshContainer;

    setRefreshContainer(value){
        this.refreshContainer = value;
    }
    // returning the state
    getState() {
        return this.state;
    }
    // function will be used to initialize all the reloading functions
    reloadInit() {

    }

    // it will run when swipe start
    swipeStart(e) {
        if (!this.state) {
            let touch = e.targetTouches[0];
            this.PositionStartY = touch.screenY;
            
        }
    }

    // it will run in the middle of swipe start and end
    swipe(e) {
        if (!this.state) {
            let touch = e.targetTouches[0];
            this.PositionStartY = touch.screenY;
            
            let changeY = this.PositionStartY > this.PositionCurrentY ? Math.abs(this.PositionStartY - this.PositionCurrentY):0;

            if(changeY >= 80){
                // if(this.refreshContainer){
                //     this.refreshContainer.style.display = "none"
                // }
            }
        }
    }

    // it will run when swipe end
    swipeEnd(e) {

    }
};

export default new Pull_To_Reload();