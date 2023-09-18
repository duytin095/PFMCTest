import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpawnManager')
export class SpawnManager extends Component {

    @property(Prefab)
    row:Prefab;

    @property(Prefab)
    cell:Prefab;

    @property(Node)
    canvas:Node;


    startPosX:number=-400;
    startPosY:number=300;

    childCellStartPosX = 0;
    childCellStartPosY = 0;

    start() {
        this.spawn();
    }

    update(deltaTime: number) {
        
    }

    spawn(){
        for (let i = 0; i < 5; i++) {
            var newRow = instantiate(this.row);
            newRow.setParent(this.canvas);
            newRow.setSiblingIndex(1);
            newRow.setPosition(this.startPosX, this.startPosY, 0);
            for (let j = 0; j < 5; j++) {
                this.spawnCell(newRow);
                
            }
            this.startPosY -= 164;
            this.childCellStartPosX = 0;
            this.childCellStartPosY = 0;
            
        }
    }

    spawnCell(row:Node){
        var newCell = instantiate(this.cell);
        newCell.setParent(row);
        newCell.setPosition(this.childCellStartPosX, this.childCellStartPosY, 0);
        this.childCellStartPosX += 163;
    }
}


