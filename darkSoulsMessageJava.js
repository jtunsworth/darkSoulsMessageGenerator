//function message
let dsMessage = {



userName: ['Chosen One', 'Chosen Undead', 'Unkindled One', 'Cursed Undead', 'Hollowed One', 'Dear Hunter', 'Afflicted One', 'Feeble Paleblood', 'Ashen One', 'Good Messenger'],

msgPT1: ['Once, the Lord of Light banished Dark, and all that stemmed from humanity. And Men assumed a fleeting form.', 'We shall never be forgotten. We knights fought valiantly, but for every one of them, we lost three score of our own.', 'Brother, unyielding sword. Rise, if you would...For that is our curse', 'Let the sun shine upon this Lord of Cinder.', 'The Sun is a wonderous body, like a magnificent father. What seeketh thee?', 'The world will fall. The fire will fade, and the souls of old will reemrge. With Dark unshackled, a curse will be upon us. And men will take their true shape.', 'Anything that has a beginning also has an end. No flame, however brilliant, does not one day splutter and fade. But then, from the ashes, the flame reignites, and a new knigdom is born, sporting a new face.', 'For the curse of life is the curse of want. And so do you peer into the fog. In hope of answers.', 'This marks the spot of our grave, but you may rest here too, if you would like.', 'Acts of goodness are not always wise, and acts of evil are not always foolish, but regardless, we shall always strive to be good.', 'Do you know why we are drawn to the nightmare? Because it sprouted from our very misdeeds ', 'We are born of the blood, made men by the blood. Our eyes are yet to open...Fear the old blood.', 'Take nourishment from these sovereignless souls.', 'My blade may break, my arrows fall wide, but my will shall never be broken. Those who live by the sword will die by it, and I will not go down without drawing mine.'],

msgPT2: ['The red moon hangs low and beasts rule the streets. Are we left with no other choice, than to burn it all to cinders.', 'Seek strength, the rest will follow.', 'Lead thy life as thou seest fit.', 'Many monarchs have come and gone. One drowned in poison, another succumbed to flame. Still another slumbers in a realm of ice.', 'Our futures are murky. Let us not be too friendly now.', 'There is no path. Beyond the scope of Light. Beyond the reach of Dark. What could possibly await us? And yet we seek it, insatiably. Such is our fate.', 'Strong I am, forge I can.', 'The First Flame quickly fades. Darkness will shortly settle. But one day, tiny flames will dance across the darkness. Like embers, linked by lords past.', 'Here we stand, feet planted in the earth, but might the cosmos be very near us, only just above our heads?', 'Curse the fiends, their children too, and their children forever true. A call to the bloodless wherever they be.', 'Fire came to be, and with it, disparity. Heat and cold, life and death, light and dark.', 'What good is a hound without hares to hunt?', 'You have a heart of gold. Do not let them take it from you.'],

msgPT3: ['Things that some would prefer kept secret. A pitiful tale of petty arrogance. High time someone exposed the whole charade.', 'Plant eyes on our brains, to clense our beastly idiocy!', 'I should think you still have dreams, well next time you dream...give some thought, to the hunt.', 'Death is equitable, accepting. We will all one day be welcomed by her embrace.', 'Beasts all over the shop. You will be one of them...sooner or later.', 'The poor, wretched souls. Be they lord or legend, the curse shows no mercy.', 'Honourable soverign, take your throne. And do great things, Dark will remain. And even a legend such as thineself can do nothing to stop that.', 'It is all a curse, and it is your cursed flesh that will inherit the flame.', 'Dark was seen as a curse. Shadow is not cast, but born of fire. And, the brighter the flame, the deeper the shadow.', 'You were at my side all along. My true mentor, my guiding moonlight.', 'At thy twilight, old thoughts return, in waves of great nostalgia.'],

msgPT4: ['I may be small, but I will die a colossus.', ' Choose thy fate. Seize it with thine own hands. All the more, should thy fate entail such foul betrayal.', 'Exhiliration, pride, hatred, rage...The world teased out our dearest emotions. Thou will understand, one day.', 'This land is peaceful, its inhabitants kind.', 'Men develop the most perculiar fascinations. Sometimes their fascinations seem to take control. Till there is very little man left.', 'Nameless, accursed Undead, unfit even to be cinder. And so it is, that ash seeketh embers.', 'Lord of Cinder. Not for virtue, but for might. Touch the darkness inside me.', 'Blasphemous murderers, blood-crazed fiends, atonement for the wrteches. By the wrath of the mother, mercy for the poor child...Mercy, oh please.', 'When the frail of heart join the fray, the hunter becomes the hunted.', 'The manifestation of madness comes from a mind teetering on the very brink, but has a sane mind produced anything of true significance?', 'Let strength be granted, so the world might be mended.', 'Inherit fire and harness the dark. Such is the calling of a true leader.', 'Life is a journey, and every journey eventually leads to home. Praise the Sun.', "Goodbye now. Stay safe friend. Don't you dare go Hollow."]

};

function yourDSMessage() {
    let name = 
    dsMessage.userName[
        Math.floor(Math.random() * dsMessage["userName"].length)
    ];

    let pt1 = 
    dsMessage.msgPT1[
        Math.floor(Math.random() * dsMessage["msgPT1"].length)
    ];

    let pt2 = 
    dsMessage.msgPT2[
        Math.floor(Math.random() * dsMessage["msgPT2"].length)
    ];

    let pt3 = 
    dsMessage.msgPT3[
        Math.floor(Math.random() * dsMessage["msgPT3"].length)
    ];

    let pt4 = 
    dsMessage.msgPT4[
        Math.floor(Math.random() * dsMessage["msgPT4"].length)
    ];
    
    return (
        name + ' ' + pt1 + ' ' + pt2 + ' ' + pt3 + ' ' + pt4
    );
};

