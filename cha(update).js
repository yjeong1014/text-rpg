function Monster(name,hp,attack,exp,gold){
    this.name=name;
    this.hp=hp;
    this.max_hp=hp;
    this.attack=attack;
    this.exp=exp; //얘 잡으면 얻는 경험치임
    this.gold=r(gold); //얘 죽이면 얻는 돈

    this.info=function(){
        tv("👽"+this.name+"💖HP:["+ this.hp+ "/"+ this.max_hp+ "]")
    }
}

function Character(name,hp,attack,exp,next_exp,gold,level){
    this.name=name;
    this.hp=hp;
    this.max_hp=hp;
    this.attack=attack;
    this.exp=exp; //이건 레벨업 경험치
	this.next_exp=next_exp; //다음 레벨로 가는 최대 경험치?
    this.gold=gold; //내 소지금
    this.level=level;

    this.info=function(){
        tv3("🧚‍♂️"+this.name +" Lv."+this.level+"("+this.exp+"/"+this.next_exp+")"+ "💖HP:["+this.hp+"/"+ this.max_hp+ "]"+"\n")
    }
}

