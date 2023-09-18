import { _decorator, Component, EventTouch, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Row')
export class Row extends Component {

    currentPosX:number;
    currentPosY:number;
    isTouching:boolean = false;

    start() {
        this.node.on(Node.EventType.TOUCH_MOVE, this.dragMoveNode.bind(this), this);
    }

    update(deltaTime: number) {
        
    }


    dragMoveNode (e: EventTouch) {


        var touchLocation = e.getUILocation();
        var nodeWorldPos = new Vec3(touchLocation.x, touchLocation.y, 0);

        var nodePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(nodeWorldPos);

        this.isTouching = true;
        this.currentPosX = nodePos.x;
        this.currentPosY = nodePos.y;
        console.log(this.currentPosX);
        

    }

    getTouchPosX(){
        return this.currentPosX;
    }

    getTouchPosY(){
        return this.currentPosY;
    }

    _isTouching(){
        return this.isTouching;
    }

}


