let intro = sprites.create(img`
    77..77.....77777777....77..77
    77..77...77777777777...77..77
    77..77..777.......777..77..77
    777777..77.........77..777777
    .7777..77....777....77..7777.
    ..77...77...7...7...77...77..
    ..77...77...7.7.7...77...77..
    ..77...77...7...7...77...77..
    ..77...77....777....77...77..
    ..77...77...........77...77..
    ..77...77...........77...77..
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `, SpriteKind.Player)
sprites.setDataBoolean(intro, "game", false)
intro.setPosition(75, 50)
animation.runImageAnimation(
intro,
[img`
    77..77.....77777777....77..77
    77..77...77777777777...77..77
    77..77..777.......777..77..77
    777777..77.........77..777777
    .7777..77....777....77..7777.
    ..77...77...7...7...77...77..
    ..77...77...7.7.7...77...77..
    ..77...77...7...7...77...77..
    ..77...77....777....77...77..
    ..77...77...........77...77..
    ..77...77...........77...77..
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    77..77..777.......777..77..77
    77..77..77.........77..77..77
    77..77.77....777....77.77..77
    777777.77...7...7...77.777777
    .7777..77...7.7.7...77..7777.
    ..77...77...7...7...77...77..
    ..77...77....777....77...77..
    ..77...77...........77...77..
    ..77...77...........77...77..
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    77..77.77...7...7...77.77..77
    77..77.77...7.7.7...77.77..77
    777777.77...7...7...77.777777
    .7777..77....777....77..7777.
    ..77...77...........77...77..
    ..77...77...........77...77..
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    .......77...7...7...77.......
    .......77...7.7.7...77.......
    77..77.77...7...7...77.77..77
    77..77.77....777....77.77..77
    777777.77...........77.777777
    .7777..77...........77..7777.
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    .......77...7...7...77.......
    .......77...7.7.7...77.......
    .......77...7...7...77.......
    .......77....777....77.......
    .7777..77...........77..7777.
    777777.77...........77.777777
    777777777...........777777777
    777777777...........777777777
    .7777..77...........77..7777.
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    .......77...7...7...77.......
    .......77...7.7.7...77.......
    .......77...7...7...77.......
    .......77....777....77.......
    .......77...........77.......
    .......77...........77.......
    ..7777777...........7777777..
    ..7777777...........7777777..
    ..77...77...........77...77..
    .7777..77...........77..7777.
    777777.77...........77.777777
    77..77.77...........77.77..77
    77..77.77...........77.77..77
    77..77.77...........77.77..77
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    .......77...7...7...77.......
    .......77...7.7.7...77.......
    .......77...7...7...77.......
    .......77....777....77.......
    .7777..77...........77..7777.
    777777.77...........77.777777
    777777777...........777777777
    777777777...........777777777
    .7777..77...........77..7777.
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    .......77...7...7...77.......
    .......77...7.7.7...77.......
    77..77.77...7...7...77.77..77
    77..77.77....777....77.77..77
    777777.77...........77.777777
    .7777..77...........77..7777.
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    ........777.......777........
    ........77.........77........
    .......77....777....77.......
    77..77.77...7...7...77.77..77
    77..77.77...7.7.7...77.77..77
    777777.77...7...7...77.777777
    .7777..77....777....77..7777.
    ..77...77...........77...77..
    ..77...77...........77...77..
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `,img`
    ...........77777777..........
    .........77777777777.........
    77..77..777.......777..77..77
    77..77..77.........77..77..77
    77..77.77....777....77.77..77
    777777.77...7...7...77.777777
    .7777..77...7.7.7...77..7777.
    ..77...77...7...7...77...77..
    ..77...77....777....77...77..
    ..77...77...........77...77..
    ..77...77...........77...77..
    ..7777777...........7777777..
    ..7777777...........7777777..
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......77...........77.......
    .......777..........77.......
    .......777777.......77.......
    ..........777777....77.......
    .............777777.77.......
    ................777777.......
    ..................7777.......
    `],
100,
false
)
story.printText("StefanStudios, Arcade, Microsoft, and ScriuCod present...", 75, 100, 7, 15)
intro.destroy()
intro = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..6111112.6111112.612.612.611112..6111112..61112..
    ..612.......612...612.612.6126112...612...612.612.
    ..612.......612...612.612.612.612...612...612.612.
    ..6111112...612...612.612.612.612...612...612.612.
    ......612...612...612.612.612.612...612...612.612.
    ......612...612...612.612.6126112...612...612.612.
    ..6111112...612....61112..611112..6111112..61112..
    ..................................................
    ..................................................
    ...61112...61112..612...612.6111112.6111112.......
    ..612.61..612.612.6112.6112.612.....612...........
    ..612.....612.612.611111112.612.....612...........
    ..612.....6111112.612612612.6111112.6111112.......
    ..6126112.612.612.612...612.612.........612.......
    ..612.612.612.612.612...612.612.........612.......
    ...611112.612.612.612...612.6111112.6111112.......
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
