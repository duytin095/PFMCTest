import { _decorator, Component, Node, Sprite } from 'cc';
import { Row } from './Row';
const { ccclass, property } = _decorator;

@ccclass('Cell')
export class Cell extends Component {

    @property(Row)
    row:Row;
    start() {
        this.row = this.node.getParent().getComponent(Row);

    }

    update(deltaTime: number) {
        if(this.row._isTouching){
            if(this.row.getTouchPosX() >= this.node.position.x){
                var sprite = this.node.getComponent(Sprite);
                sprite.enabled = true;
            }
        }
    }
}


