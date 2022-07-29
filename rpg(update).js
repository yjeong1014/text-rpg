var t; //textarea A
var t2;//textarea B
var t3;//textarea C

var str=""; //a에 들어갈 텍스트
var str2=""; // b
var str3="";  // c



var zz=0;
var input_turn_bt;
var turn = 0;


var elf;
var orc;




window.onload = function(){
    t = document.getElementById("textareaA");
    t2 = document.getElementById("textareaB");
    t3 = document.getElementById("textareaC");
    input_turn_bt=document.getElementById("input_turn")

    orc=new Monster("오크",90,7,45,40);
    orc.info();

    tv("\n");
    
    elf=new Character("엘프",100,12,0,300,0,1);
    elf.info();
    tv("\n");
    tv("=================================================================================================")
    tv("\n");
    tv("▶👽"+orc.name+" 이(가) 나타났다!"+"\n")
    tv("=================================================================================================")
    tv("\n");
    tv("▶전투시작!")
    tv("\n");

    while(true){
        proc_battle();
        if(elf.hp <= 0 || orc.hp <=0){
            break;
        }   
    }
    tv("=================================================================================================")
    tv("\n");
    tv("▶전투종료!");
    tv("\n");
    tv("💀불쌍한 "+orc.name+","+elf.name+"에게"+orc.exp+"경험치를 주고 사라졌습니다!");
    tv("\n");
    elf.exp = elf.exp + orc.exp;
    elf.gold = elf.gold + orc.gold;
    tv(orc.gold+"골드을(를) 얻었습니다!"+"(💰소지금: "+elf.gold+")")
    tv("\n");

    elf.info();
    tv("\n");

}

function proc_battle(){
    var elf_attack= r(elf.attack);
    var orc_attack= r(orc.attack);
 
    tv(elf.name +"의 🏹공격! " + elf_attack+"의 데미지");
    tv("\n");
    tv(orc.name +"의 🪓공격! " + orc_attack+"의 데미지"+"\n");
    tv("\n");

    elf.hp=elf.hp-orc_attack;
    orc.hp=orc.hp-elf_attack;

    orc.info();
    tv("\n");
    elf.info();
    tv("\n");

}

//진행버튼
function turn_bt(){
    
    turn= turn + 1;
    console.log("현재 턴:"+turn);

    input_turn_bt.value= turn;

    
}



// 버튼 눌렀을떄 글씨 바뀌는거
function changeBtnName(){
    const btnElement
    = document.getElementById('btn');
    btnElement.value="마을로 돌아가는중..";
//이거있어서 누르면 초기화됨
    t.value = "";
    t3.value = "";
}

//그냥 재미로ㅋ;
function changezzName(){
    const btnElement
    = document.getElementById('zz');
    btnElement.value="공격!";

    zz = zz+1;
    console.log(zz);
    if(zz==15){
        alert("진정하세요..")
    }
    if(zz==30){
        alert("진정하시라니까요..!")
    }
    if(zz==45){
        alert("그래요 당신이 이겼어요.")
    }
    if(zz==55){
        alert("아직도 하는거에요??")
    }
    if(zz==60){
        alert("그만그만그만그만!")
    }
    if(zz==65){
        alert("끈질기시네요")
    }
    if(zz==75){
        alert("나랑 장난해요?")
    }
    if(zz==82){
        alert("대단하네요 벌써 82번 누르셨어요")
    }
    if(zz==99){
        alert("멋져요 멋져 당신이 이겼어요 드디어 99번 누르셨으니까요")
    }
}


