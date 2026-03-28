// ===== INTRO ANIMATION =====
const lines = document.querySelectorAll(".line, .title, .quote");
lines.forEach((el,i)=>{
    setTimeout(()=>{
        el.style.opacity=1;
        el.style.transform="translateY(0)";
        el.style.transition="1s";
    }, i*1500);
});

// ===== NAVIGATION =====
function goStudents(){ location.href="student.html"; }
function goMemories(){ location.href="memories.html"; }

// ===== STUDENTS DATA =====
const students=[
{
    name:"gypy",
    video:null,
    letter:`Hiiiii Ma’am Jed,

Thank you for being our second mother, Ma’am. I truly admire you so much. The way you handle your emotions and mood so well is really inspiring. I’ve learned a lot from you, Ma’am, and I’m also very happy because I’ve gained so many interesting lessons.

Thank you so much, Ma’am Jed.

-gypy`
},

{
    name:"Maria",
    video:null,
    letter:`Dear Ma’am Jed,

The day of our recognition has finally arrived. For the past few days and months, all we could say was “unta wa nay klase!” “hapit na bakasyon!” or “kapoi adto skwelahan”, but then realization hits. You will no longer be our adviser next school year, and gusto ko na lang bawion ang mga days nga ga dali ko, na I kept on wishing na unta mana ni nga S.Y. Now, I’m starting to accept all of it, even though its kind of sting na dili na ikaw amoang adviser, wala man mi mabuhat huhu. Kung pwede lang gyud ma’am na ikaw lang gihapun among adviser sa G12 ignon gyud namo si ma’am Van hehe, eme lang hehehehe. 

But, really. Thank you, Ma’am Jed. You have really help us a lot, we’ve learned so much from you. And honestly, I don’t know if makaya nako akong first year as senior high school student’s kung wala imong guidance. You have given us warmth and comfort just by being our adviser, you’ve helped me concur my fears in starting this new phase of my lives, and helped me build myself for the days to come. You shave played a massive role in shaping our lives. Thank you pud ma’am, for coping with our ka-sabaan, ka-oahan, ka-badlongon, and ka-kulitan. Sorry if we were such a headache sa imoha and yet you still didn’t give up on us. THANKYOUU MA’AM. 

Thank you so much for being with us through this hard yet full of knowledge journey ma’am Jed. I will always be grateful knowing I once had you as my adviser. I wish you all the best ma’am, may you find happiness and peace in everything you do. LOVE YOU MA’AM!!

Sincerely,Maria Lylle Zhyrell U. Chee kee

P. Sorry kayo sa mga punctuations ma’am huhu`
},

{
    name:"Sam",
    video:null,
    letter: `Dear Ma’am Jed,

Good day!

I would like to express my sincere appreciation and gratitude for all the effort, patience, and dedication you have shown us. Your guidance has truly helped me grow not only as a student but also as a person. You always make learning meaningful and inspiring, and your passion for teaching motivates us to do our best.

I also want to say that I know I’ve done a lot of bad things, and I’m truly sorry for those moments. Thank you for your understanding and for still believing in me despite my mistakes. Your patience means so much, and it encourages me to do better.

Thank you for your encouragement and for always believing in our abilities even when we doubt ourselves. You have made a positive impact on my learning journey, and I will always carry the lessons you’ve taught us.

Once again, thank you so much, Ma’am Jed. I am truly grateful to have you as my teacher. 

Sincerely,
Sam Acenas`
},

{
    name:"Samantha",
    video:null,
    letter:`Hi Ma’am Jed,

Ako diay si Samantha Watapampam, usa sa imong mga estudyante. Gusto nako magsugod ani nga sulat pinaagi sa pagpasalamat nimo sa tanang panahon, effort, ug pasensya nga imong gihatag sa amo.

Sa tinuod lang, dili kaayo ko expressive nga tao, labi na kung sa words or pagsulti. Usahay maulaw gyud ko, mao nga dili nako pirmi mapakita kung unsa nako ka-appreciate ang imong gibuhat para sa amo. Pero sa sulod nako, kabalo ko sa akong kaugalingon nga dako kaayo kog pasalamat nimo, ug dako pud ang impact sa imong pagtudlo sa akong pagkat-on.

Tungod sa imoha, mas nasabtan nako ang among mga leksyon. Naay mga panahon nga lisod kaayo sabton ang topics, pero tungod sa imong pag-explain nga klaro ug sa imong pagpasensya, nahimo silang mas sayon sabton. Dili lang kay nakat-on ko sa subject, pero nakat-on pud ko unsaon pag sabot ug pag-value sa learning.

Na-appreciate pud nako kung unsa ka ka-dedicated sa imong trabaho. Makita gyud nga gahatag kag effort para lang masabtan namo ang leksyon. Bisan usahay kapoy na siguro, padayon gihapon ka sa pagtudlo ug pag-guide sa amo. Tungod ana, na-inspire pud ko nga maningkamot ug buhaton akong best.

Pasayloa ko kung dili ko kaayo vocal or dili ko pirmi makapakita sa akong appreciation. Pero gusto nako ipahibalo nimo nga tanan nimong efforts wala gyud nasayang. Naa gyud kay na-touch ug natabangan nga estudyante—apil na ko ana.

Dili lang knowledge ang akong madala gikan sa imong klase, kundi pati pud ang mga values ug lessons nga magamit nako sa akong kinabuhi. Dako kaayo kog pasalamat nga ikaw ang nahimong teacher namo.

Salamat kaayo, Ma’am Jed, sa tanan. Amping pirmi, ug hinaot padayon pa nimo ma-inspire ang daghan pang estudyante sama nako.

With sincere appreciation,
Samantha Watapampam`
},

{
    name:"Stephany",
    video:null,
    letter:`To our dearest Ma'am Jed,

Hi, Ma'am Jed!

First of all, gusto nako mag-thank you. Thank you so, so, sooo much, Ma'am. Not just for being our teacher, but also for being a sisterly figure to us.

Actually, I always saw you at school during my Junior High School years, and to be honest, at first gyud kay wala ko nag-expect nga maestra diay ka kay mura gyud kag student. No joke, ga-blend in man gyud ka sa mga students, Ma'am.Pero pagka first day of school in Senior High, nakurat ko kay ikaw among adviser. Despite that, I'm really thankful and relieved at the same time. Feel man gyud nako kay you’re the kind of teacher nga dali ra ma-close sa students, dali ra maduulan, understanding, og considerate, and I was right about that.

Even though unsa mi kabadlungon (which I admit nga tinood gyud), you always find it in your heart to forgive us. No matter how big our mistakes are, or how many times we’ve given you headaches, made you cry, and everything. You always try to understand us and scold us (in a good way, of course).

And sorry kaayo, Ma'am, kay na-handle gyud mi nimo. The worst batch ever. Aware man gyud ko nga sa tanan nimong na-handle, kami gyud ang pinaka-labad, and I’m not proud of it. Usahay gani kay maulaw nako nimo kay pirme nalang gyud mi agka-mention sa GC sa mga maestra. Yes, Ma'am. I know about that, si Sir Chee Kee man gyud gaingon saamo. So, I’m really sorry gyud, Ma'am. 

Fun fact bitaw, Ma'am. I already expected that Senior High School would turn my life upside down, but because of you, it only turned 360°. It was still hard, challenging, pressuring (especially since I’m surrounded by competitive people), stressful, and even depressing. But despite all that, I was able to handle it. Not perfectly, but enough for me to not completely lose my mind. And all of this wouldn’t feel like "okay ra, kaya raman diay" if it wasn’t for your guidance and endless lectures.

Thank you for being our first adviser in Senior High School, for being a sisterly figure to us, for your endless scolding and lectures, for forgiving us every time we make mistakes, for giving us enlightenment about what Senior High School life really is, and for helping us adjust and understand this journey, slowly but surely.

Also, thank you for giving me advice about my love life HAHAHAH. I was really shocked when you asked me about that, especially when you suddenly gave me an advice to minimize that behavior kay babae lagi ko. And I can’t really argue with that because tinood man pud sad gyud imong giingon. So thank you kaayo, Ma'am. I really appreciate your concern, and I’ll always keep that advice in mind.

Bye, Ma'am! Unta okay ra nga mubisita mi inig Grade 12 diha, especially if need namo magpa-print HAHAHAH.

That’s all. We love you, Ma'am/Ate Jed! 

Sincerely yours,
Stephany Dagani`
},

{
    name:"lovely",
    video:null,
    letter:`Hi ma'ammmm! Sa tinuod lang ma'am wala jud koy maistorya nga mga churvaels  kundi THANK YOU ra jud ma'am hehe. Salamat sa taas nga pasensya nga imong gihatag saamo ma'am  (feel jud nako ma'am kay napuno na jud kas amo sorry ma'am ). Thank you pod ma'am sa pagpasabot saamo og tarong sa mga lesson nga imong ag-itudlo, masabtan gyud sya ma'am no jokeee hehe tas sa imong mga advices nga dili gyud intawon namo agkahimo, sorry ma'am. Sorry pod diay ma'am kay dili namo agkamaintain ang kahinlo saamong area . Mao rana akong maingon ma'am hehe thank youu kaayo gyud sa all! God bless you always ma'ammmm `
},

{
    name:"Gwen",
    video:null,
    letter:`Dear Cher Jed,

I want to start by saying Im sorry for the times I might have given you high blood! I know I can be a handful sometimes, and I probably made some days more chaotic than they needed to be. 

But beyond the apologies, I want to sincerely thank you. For your exceptional guidance, patience, and unwavering support as my adviser, you have not only taught me lessons in school but also valuable lessons in life. Your encouragement and belief in me have given me the confidence to aim higher and become a better person. You have been a true inspiration in my journey, and your influence will always stay in my heart. I am truly grateful for everything you have done for me.

Cher Jed, you have become more than just an adviser you have become someone Im attached to, a comfort zone where I feel happy, relaxed, and inspired. Being around you makes even ordinary school days feel special. Your presence brings positivity, your guidance brings clarity, and your humor makes everything more enjoyable. I always look forward to seeing you and learning from you, not just in schoolwork, but in life.

Every time I give you a gift, I love seeing your reaction it always makes me so happy. Those little moments remind me of how meaningful your presence is, and how lucky I am to have you as my adviser. You make lessons fun, school days brighter, and my journey as a student much more memorable.

Thank you for being more than an adviser for being a mentor, a guide, a source of encouragement, and a little bit of comic relief when we needed it. Your patience, warmth, and care have left a lasting impact on me, and I will carry your lessons with me for the rest of my life.

Once again, I’m sorry for any times I might have made your blood pressure rise, and I am truly thankful for your guidance, support, and inspiration. You have made a difference in my life, Cher Jed, and I will always remember it.

Also, I want to say sorry that during Recognition Day, I did not have the courage to personally give you the garland and certificate. I was a bit shy, but please know that I truly meant it, and it came from the heart.

Even after Grade 11, I would still love to visit again and again, just to see you and remember all the lessons and memories you haveve given me.

And honestly, you really deserve an award not just for being an amazing adviser, but for being someone who inspires, motivates, and brightens the lives of everyone around you.

Lastly I want to say THAAAAAAAANK YOU VEEEEEEERRRYYYY MUCH FOR BEING MY ADVICE AND THAAAAAAAANK YOU FOR THE SCHOOL YEAR IT WAS AN AMAZING JOURNEY 

Sincerely,
Gweeeennny :)`
}
];


// ===== ORBS =====
const container=document.getElementById("orb-container");
if(container){
    students.forEach((s,i)=>{
        const orb=document.createElement("div");
        orb.className="orb";
        orb.innerText=s.name;
        orb.style.top=Math.random()*80+"%";
        orb.style.left=Math.random()*90+"%";
        orb.onclick=()=>{ localStorage.setItem("i",i); location.href="viewer.html"; };
        container.appendChild(orb);
    });
}

// ===== VIEWER =====
const video=document.getElementById("video");
if(video){
    let i=parseInt(localStorage.getItem("i"))||0;

    function typeText(text, element){
        element.innerHTML="";
        let index=0;
        function typing(){
            if(index<text.length){
                element.innerHTML+=text.charAt(index);
                index++;
                setTimeout(typing,15);
            }
        }
        typing();
    }

    function show(){
        const vid=document.getElementById("video");
        const noVid=document.getElementById("noVideo");
        const letterEl=document.getElementById("letter");

        if(students[i].video){
            vid.style.display="block";
            noVid.style.display="none";
            vid.src=students[i].video;
        } else {
            vid.style.display="none";
            noVid.style.display="block";
        }

        typeText(students[i].letter, letterEl);
    }

    window.next=()=>{
        i=(i+1)%students.length;
        show();
    }

    window.prev=()=>{
        i=(i-1+students.length)%students.length;
        show();
    }

    show();
}

// ===== MEDIA FILE LIST =====
const mediaFiles = [
    
"496624209_682383634674385_8115481257277973302_n.jpg.jpeg",
"496625167_5039348636291237_8521213287436102326_n.jpg.jpeg",
"496625429_696970959771853_5921878162176689514_n.jpg.jpeg",
"496625628_2089159188230441_2464764132872130162_n.jpg.jpeg",
"504377614_1611898866172036_839274440693646063_n.jpg.jpeg",
"504419967_712489438408528_3261480204335574545_n.jpg.jpeg",
"504527127_1259736842404704_2028489224991228864_n.jpg.jpeg",
"504596485_727043486364402_2114271472901795658_n.jpg.jpeg",
"508857865_23935046889495886_874629687131414159_n.mp4.mp4",
"508913385_2969481489915880_4148027002200084552_n.jpg.jpeg",
"525797840_754271014225575_4798155408164634467_n.jpg.jpeg",
"525812874_1357554529333714_4513018616477425170_n.jpg.jpeg",
"526066521_4277431725873699_4744632768847777024_n.jpg.jpeg",
"526487428_745813931744259_4450748195845687885_n.jpg.jpeg",
"527461564_24319614057634369_3801556326299331711_n.jpg.jpeg",
"530376563_30874435382201315_3523738434431760111_n.mp4.mp4",
"529101966_1544858720028861_544944810872788315_n.jpg.jpeg",
"538916385_2168751563530360_8770797343357176931_n.jpg.jpeg",
"538948625_1048514880828403_2277471028090197924_n.jpg.jpeg",
"539598470_2260618774372550_186087448841649726_n.jpg.jpeg",
"541016147_1458824595166650_5200121250983295838_n.jpg.jpeg ",
"541016870_ 1974911836616085_ 7393647574048765750_n.jpg.jpeg ",
"541146234_1245845760625355_5543579752786011011_n.jpg.jpeg ",
"542106580_31015259714788094_1517653431152983209_n.mp4.mp4",
"541593901_1508817967058097_7772202678636679283_n.jpg.jpeg ",
"541616036_1326793468895708_4950606419820479842_n.jpg.jpeg ",
"541616325_1105725575104120_2430067258032768111_n.jpg.jpeg ",
"541953086_1800194894037679_7873896174370811478_n.jpg.jpeg ",
"542344286_1454137919207131_3942135306323154490_n.jpg.jpeg ",
"542391954_1711269572921893_2236937767725812842_n.jpg.jpeg ",
"545465168_24378669401798123_542283763629419531_n.mp4.mp4",
"536291506_759774507031942_6074072058408186872_n.jpg.jpeg",
"549288608_2153867068476010_4759705888645409169_n.jpg.jpeg",
"551241010_ 1323625119400395_8280733301930678534_n.jpg.jpeg ",
"552247013_790622267188582_7753174716105634574_n.jpg.jpeg",
"553748402_1114534617433022_1254651880324811747_n.jpg.jpeg ",
"554088924_1526137972052317_8031382428042864741_n.jpg.jpeg ",
"551374809_1535993607588376_1324005329835980872_n.jpg.jpeg ",
"551405283_ 1533525301151369_626009490162661062_n.jpg.jpeg ",
"551433533_1847401039513611_2183634147295037512_n.jpg.jpeg",
"551514847_1471362483915862_64111636_n.jpg.jpeg",
"551797660_1328497568895700_221174892406364436_n.jpg.jpeg ",
"551808660_1100453115160845_5986725430611267987_n.jpg.jpeg",
"552765974_779691108265999_6466056775651407743_n.jpg.jpeg ",
"553785727_1139042130894937_4124146464016683950_n.jpg.jpeg ",
"553843434_1936541310468489_6589778370951436238_n.jpg.jpeg ",
"554160161_1824779825097735_4858671138153082027_n.jpg.jpeg ",
"554301070_1848765922385567_287266740039084265_n.jpg.jpeg ",
"555485021_1592255245091952_2749633322994675730_n.jpg.jpeg",
"076_25406187732316552_7429376673_n.jpg.jpeg",
"557533415_786591094156696_2039791504135263698_n.jpg.jpeg ",
"557570548_24535416769462281_6575696562349538418_n.mp4.mp4",
"557786533_10072456086187056 _2433492906268178691_n.mp4.mp4",
"558011098_1541433273966010_3055853472906858066_n.jpg.jpeg ",
"589128241_1154390776818592_5910163681470571136_n.jpg.jpeg ",
"589734567_1240478401242574_4084765665687859526_n.jpg.jpeg ",
"589908857_ 1205441174787459_1499483843341232868_n.jpg.jpeg ",
"593411252_ 32796113056698788_1258257919528909357_n.mp4.mp4",
"595267717_1551170062798980_3758458267864923547_n.jpg.jpeg ",
"595272278_1195162965905843_656541116941990242_n.jpg.jpeg ",
"595288844_1208661817813121_7305553839944458290_n.jpg.jpeg ",
"552883594_1539999477359739_1159696172773843492_n.jpg.jpeg ",
"553433380_24919786467616254_3648057256461979893_n.jpg.jpeg ",
"554483866_25453863690868235_8974534977887289451_n.mp4.mp4",
"557449646_24552965400998411_3163872242346266550_n.mp4.mp4",

    "videos/508857865_23935046889495886_874629687131414159_n.mp4.mp4",
    // add all your remaining images/videos
];

const gallery = document.getElementById("gallery");

// ===== CREATE MEDIA ELEMENTS ONE-BY-ONE =====
mediaFiles.forEach((file, index) => {
    const div = document.createElement("div");
    div.className = "media";
    div.style.animationDelay = `${index * 0.3}s`; // stagger animation

    if(file.endsWith(".mp4")) {
        const vid = document.createElement("video");
        vid.src = file;
        vid.controls = true;
        div.appendChild(vid);
    } else {
        const img = document.createElement("img");
        img.src = file;
        div.appendChild(img);
    }

    // Alternate left-right position
    if(index % 2 === 0) div.style.marginLeft = "0";
    else div.style.marginLeft = "auto";

    gallery.appendChild(div);
});

// ===== MODAL FUNCTION =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");

function openMedia(file, type){
    modal.style.display = "flex";
    if(type === "video"){
        modalVideo.src = file;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.play();
    } else {
        modalImg.src = file;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
    }
}

document.addEventListener("click", e => {
    if(e.target.tagName === "IMG" && e.target.parentElement.classList.contains("media")){
        openMedia(e.target.src, "image");
    }
    if(e.target.tagName === "VIDEO" && e.target.parentElement.classList.contains("media")){
        openMedia(e.target.src, "video");
    }
});

document.getElementById("close")?.addEventListener("click", ()=>{
    modal.style.display = "none";
    modalVideo.pause();
});