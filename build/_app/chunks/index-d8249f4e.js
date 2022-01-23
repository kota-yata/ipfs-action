const u={profile:{name:"Kota Yatagai",bio:"18yo / Software Developer"},topics:[{category:"Decentralized",description:"Currently I am researching blockchain system, especially DHT,       which is the protocol for non-structual overlay P2P network. Although I have not published any       implementation or paper on the basis of this research yet, I have been reading the paper of DHT       algorithms and implementation code."},{category:"Algorithm",description:"Posts about the implementation of existing algorithms or algorithms for my original library.       Feel free to create an issue or pull request for those implementations; most of the implemetation,       if not all, are on GitHub."},{category:"Cryptography",description:"Posts about cryptography. Some posts might be categolized in different topic if it is related         to the topic more than cryptography. (e.g. Implementation of cipher might be tagged as Algorithm)"},{category:"Computer Science",description:"Posts about computer science which are not related to any of the topic above."},{category:"Programming",description:"Posts about web development and programming. Mostly explanation of a web api."},{category:"Non-Tech",description:"Posts not related to any technology."}],works:{th:{lang:"Lang",date:"Date",note:"Note"},body:[{name:"Algorithm Implementation",color:"#EA34B7",contents:[{title:"Base64",github:"ky_base64",lang:"TypeScript",date:"Aug 2021",note:"Base64 encoding & decoding algorithm supporting UTF-8",articles:[{text:"Implementation Article (Japanese)",url:"/posts/base64"}]},{title:"Huffman Coding",github:"deno-huffman",lang:"TypeScript",date:"Mar 2021",note:"Huffman coding encoding & decoding algorithm",articles:[{text:"Implementation Article (Japanese)",url:"/posts/huffman"}]},{title:"SHA-256",github:"oraganic-sha256",lang:"TypeScript",date:"Jan 2021",note:"Pure implementation referencing NIST paper",articles:[{text:"Implementation Article (Japanese)",url:"/posts/sha256"}]}]},{name:"Web App",color:"#4FE479",contents:[{title:"Slouch",github:"Slouch",lang:"TypeScript, Svelte.js",date:"Jan 2021",note:"Markdown editor on which you can rewrite your local files",articles:[{text:"Explanation Article (Japanese)",url:"/posts/slouch"},{text:"URL (Japanese)",url:"https://slouch.dev"}]},{title:"SmileScore",github:"SmileScore",lang:"TypeScript, Sveltekit",date:"Jun 2021",note:"Depressing web app scoring your smile",articles:[{text:"URL (English)",url:"https://smilescore.vercel.app"}]}]},{name:"npm Package",color:"#EBF0B3",contents:[{title:"Percom",github:"Percom",lang:"JavaScript",date:"Aug 2020",note:"npm package calculating and listing permutaion & combination",articles:[{text:"Implementation Article (Japanese)",url:"/posts/permutation"},{text:"npm",url:"https://www.npmjs.com/package/percom"}]},{title:"ISO-639-1-JP",github:"iso-639-1-jp",lang:"TypeScript",date:"Oct 2020",note:"npm package translating ISO country code into Japanese",articles:[{text:"npm",url:"https://www.npmjs.com/package/iso-639-1-jp"}]}]},{name:"Others",color:"#4f72e4",contents:[{title:"KEC",github:"kec",lang:"Go",date:"Nov 2020",note:"File extension converter for png/jpg/gif"}]}]},trip:[{location:"Universal Studio Japan",short:"usj",date:"August 2021",description:"The last trip before studying abroad.       Though I and my friends had already been to Universal Studio Hollywood, we had so much fun the original rides in Osaka.       I was exhausted when we leave there because of motion sickness, but was also satisfied with that we could make a great memory.",image:9},{location:"Izu",short:"izu",date:"July 2021",description:"Traveled to Izu, a summer resort in Japan with my family.       I tried surfing for the first time, and it was really fun. Since typhoon was coming close,       the sea raged and swimming was banned few days after we got back home.       But the weather was great while we stay.",image:8},{location:"Los Angels",short:"la",date:"February 2020",description:"The last trip before quarantine.       Traveled around Redondo Beach, Citadel, Beverly Hills, Santa Monica, Hollywood, San Diego with my friends as a school trip.       Also we visited UCLA. The locker room of UCLA basketball team was like that of NBA.       This is definitely the best trip of my life, and I frequently look back this nostalgic, good old days.",image:32},{location:"Bali",short:"bali",date:"July 2018",description:"Stayed at RIMBA Jimbaran, a great resort hotel with tons of pool and restaurant, with my family.       We've enjoyed the beauty of the beaches, and deliciousness of the local foods for 4 days. Nothing can spare this wonderful time.",image:12}],dialog:"Most of, if not all, the posts are in Japanese and those are not going to be translated.   About/Contact/Works page and the description for each topic are translated."},e={profile:{name:"\u516B\u8C37\u822A\u592A",bio:"18yo / \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u8005"},topics:[{category:"Decentralized",description:"\u73FE\u5728\u50D5\u306F\u30D6\u30ED\u30C3\u30AF\u30C1\u30A7\u30FC\u30F3\u3001\u7279\u306BDHT\u306B\u3064\u3044\u3066\u30EA\u30B5\u30FC\u30C1\u3092\u3057\u3066\u3044\u307E\u3059\u3002\u9AD8\u6821\u306E\u5352\u7814\u3082\u300C\u5206\u6563\u578B\u30D5\u30EA\u30DE\u306E\u63D0\u6848\u300D\u306A\u308B\u30C6\u30FC\u30DE\u3067\u7814\u7A76\u3092\u3057\u3066\u304A\u308A\u3001\u30D6\u30ED\u30C3\u30AF\u30C1\u30A7\u30FC\u30F3\u3084P2P\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3001\u975E\u4E2D\u592E\u96C6\u6A29\u578B\u30B7\u30B9\u30C6\u30E0\u306B\u95A2\u308F\u308B\u6280\u8853\u306E\u30EA\u30B5\u30FC\u30C1\u8A18\u4E8B\u3092\u7814\u7A76\u30AB\u30C6\u30B4\u30EA\u3068\u3057\u3066\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u4F53\u7CFB\u5316\u3059\u308B\u524D\u6BB5\u968E\u306E\u30E1\u30E2\u306FScrapbox\u306B\u7F6E\u3044\u3066\u3042\u308A\u307E\u3059\u3002"},{category:"Algorithm",description:"\u65E2\u5B58\u306E\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u88C5\u3084\u81EA\u4F5C\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u4F7F\u3046\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306A\u3069\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u306F\u3053\u3053\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u307B\u3068\u3093\u3069\u306E\u8A18\u4E8B\u5185\u306E\u5B9F\u88C5\u306FGitHub\u306B\u4E0A\u304C\u3063\u3066\u308B\u3068\u601D\u3046\u306E\u3067\u6539\u5584\u70B9\u3084\u6307\u6458\u304C\u3042\u308B\u5834\u5408\u306F\u305D\u3063\u3061\u3067Issue\u3092\u7ACB\u3066\u3066\u3082\u3089\u3048\u308C\u3070\u306A\u308B\u306F\u3084\u3067\u78BA\u8A8D\u3057\u307E\u3059\u3002"},{category:"Cryptography",description:"\u6697\u53F7\u5B66\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u306F\u3053\u3053\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u6697\u53F7\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u3067\u3082\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u5B9F\u88C5\u3057\u3066\u3044\u308B\u3082\u306E\u306F\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u30AB\u30C6\u30B4\u30EA\u30FC\u306B\u3042\u308A\u3001\u7814\u7A76\u30AB\u30C6\u30B4\u30EA\u30FC\u306B\u7F6E\u304B\u308C\u3066\u308B\u5834\u5408\u3082\u304C\u3042\u308A\u307E\u3059\u3002"},{category:"Computer Science",description:"\u4E0A\u8A18\u306E\u3069\u306E\u30AB\u30C6\u30B4\u30EA\u30FC\u306B\u3082\u5F15\u3063\u304B\u304B\u3089\u306A\u3044\u8A08\u7B97\u6A5F\u79D1\u5B66\u5206\u91CE\u306E\u8A18\u4E8B\u306F\u3053\u3053\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30C3\u30B5\u30FC\u3084\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u304C\u30E1\u30A4\u30F3\u306B\u306A\u308B\u4E88\u5B9A\u3067\u3059\u3002"},{category:"Programming",description:"Web\u30A2\u30D7\u30EA\u306E\u5B9F\u88C5\u3084API\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u306F\u3053\u3053\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u4E00\u6642\u671FChrome\u306EProject Fugu\u3092\u8FFD\u3063\u3066\u305F\u6642\u671F\u304C\u3042\u308A\u3001\u305D\u306E\u6642\u306B\u66F8\u3044\u305F\u8A18\u4E8B\u3082\u4F55\u500B\u304BZenn\u304B\u3089\u79FB\u884C\u3057\u3066\u3044\u307E\u3059\u3002"},{category:"Non-Tech",description:"\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u30B5\u30A4\u30A8\u30F3\u30B9\u306B\u76F4\u63A5\u95A2\u4FC2\u306E\u306A\u3044\u8A18\u4E8B\u306F\u3053\u3053\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059\u3002\u54F2\u5B66\u3068\u304B\u306E\u8A71\u3082\u4F53\u7CFB\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3089\u66F8\u3044\u3066\u3044\u304D\u305F\u3044\u306A\u3002"}],works:{th:{lang:"\u8A00\u8A9E",date:"\u65E5\u4ED8",note:"\u60C5\u5831"},body:[{name:"Algorithm Implementation",color:"#EA34B7",contents:[{title:"Base64",github:"ky_base64",lang:"TypeScript",date:"2021\u5E748\u6708",note:"UTF-8\u5BFE\u5FDC\u306EBase64\u30A8\u30F3\u30B3\u30FC\u30C0\u30FC&\u30C7\u30B3\u30FC\u30C0\u30FC\u306E\u5B9F\u88C5",articles:[{text:"\u5B9F\u88C5\u8A18\u4E8B",url:"/posts/base64"}]},{title:"Huffman Coding",github:"deno-huffman",lang:"TypeScript",date:"2021\u5E743\u6708",note:"\u7D14\u7C8B\u306A\u30CF\u30D5\u30DE\u30F3\u7B26\u53F7\u306E\u30A8\u30F3\u30B3\u30FC\u30C0\u30FC\u3068\u30C7\u30B3\u30FC\u30C0\u30FC",articles:[{text:"\u5B9F\u88C5\u8A18\u4E8B",url:"/posts/huffman"}]},{title:"SHA-256",github:"oraganic-sha256",lang:"TypeScript",date:"2021\u5E741\u6708",note:"NIST\u306E\u8AD6\u6587\u305D\u306E\u307E\u307E\u306B\u5B9F\u88C5\u3057\u305F\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0",articles:[{text:"\u5B9F\u88C5\u8A18\u4E8B",url:"/posts/sha256"}]}]},{name:"Web App",color:"#4FE479",contents:[{title:"Slouch",github:"Slouch",lang:"TypeScript, Svelte.js",date:"2021\u5E741\u6708",note:"\u30ED\u30FC\u30AB\u30EB\u30D5\u30A1\u30A4\u30EB\u3092\u4E0A\u66F8\u304D\u3067\u304D\u308B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC",articles:[{text:"\u8AAC\u660E\u8A18\u4E8B",url:"/posts/slouch"},{text:"Web\u30B5\u30A4\u30C8",url:"https://slouch.dev"}]},{title:"SmileScore",github:"SmileScore",lang:"TypeScript, Sveltekit",date:"2021\u5E746\u6708",note:"\u7B11\u9854\u306B\u70B9\u6570\u3092\u3064\u3051\u308B\u3068\u3044\u3046\u30C7\u30A3\u30B9\u30C8\u30D4\u30A2Web\u30A2\u30D7\u30EA",articles:[{text:"Web\u30B5\u30A4\u30C8",url:"https://smilescore.vercel.app"}]}]},{name:"npm Package",color:"#EBF0B3",contents:[{title:"Percom",github:"Percom",lang:"JavaScript",date:"2020\u5E748\u6708",note:"\u7D44\u307F\u5408\u308F\u305B\u3068\u9806\u5217\u306E\u6570\u3092\u8A08\u7B97\u3057\u305F\u308A\u5217\u6319\u3057\u305F\u308A\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA",articles:[{text:"\u5B9F\u88C5\u8A18\u4E8B",url:"/posts/permutation"},{text:"npm\u30DA\u30FC\u30B8",url:"https://www.npmjs.com/package/percom"}]},{title:"ISO-639-1-JP",github:"iso-639-1-jp",lang:"TypeScript",date:"2020\u5E7410\u6708",note:"ISO\u306E\u56FD\u30B3\u30FC\u30C9\u3068\u65E5\u672C\u8A9E\u540D\u3092\u5909\u63DB\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA",articles:[{text:"npm\u30DA\u30FC\u30B8",url:"https://www.npmjs.com/package/iso-639-1-jp"}]}]},{name:"Others",color:"#4f72e4",contents:[{title:"KEC",github:"kec",lang:"Go",date:"2020\u5E7411\u6708",note:"jpg/png/gif\u306B\u5BFE\u5FDC\u3057\u305F\u753B\u50CF\u306E\u62E1\u5F35\u5B50\u5909\u63DBCLI"}]}]},trip:[{location:"USJ",short:"usj",date:"2021\u5E748\u6708",description:"\u7559\u5B66\u524D\u6700\u5F8C\u306E\u65C5\u884C\u3002\u30CF\u30EA\u30A6\u30C3\u30C9\u306E\u30E6\u30CB\u30D0\u30FC\u30B5\u30EB\u30B9\u30BF\u30B8\u30AA\u3068\u306F\u307E\u305F\u9055\u3046\u96F0\u56F2\u6C17\u3068\u4E57\u308A\u7269\u304C\u3042\u3063\u3066\u306A\u304B\u306A\u304B\u826F\u304B\u3063\u305F\u3002      \u30DB\u30C6\u30EB\u3067\u53CB\u9054\u3068\u30B9\u30DE\u30D6\u30E9\u3084\u3063\u3066\u5468\u308A\u304C\u5BDD\u305F\u5F8C\u306B1\u4EBA\u3067\u305A\u3063\u3068\u5FA9\u5E30\u963B\u6B62\u7DF4\u7FD2\u3057\u3066\u305F\u306E\u3082\u826F\u3044\u601D\u3044\u51FA\u3002",image:9},{location:"\u4F0A\u8C46",short:"izu",date:"2021\u5E747\u6708",description:"\u4E45\u3005\u306B\u5BB6\u65CF\u3067\u884C\u3063\u305F6\u5E74\u3076\u308A\u306E\u4F0A\u8C46\u3002\u3053\u3053\u3067\u30B5\u30FC\u30D5\u30A3\u30F3\u30C7\u30D3\u30E5\u30FC\u3057\u305F\u3082\u306E\u306E\u3001\u50D5\u3089\u304C\u4F0A\u8C46\u3092\u96E2\u308C\u305F\u7FCC\u65E5\u306B\u904A\u6CF3\u7981\u6B62      \u306B\u306A\u308B\u307B\u3069\u306E\u8352\u6CE2\u3060\u3063\u305F\u306E\u3067\u521D\u5FC3\u8005\u306B\u306F\u4E2D\u3005\u304D\u3064\u304B\u3063\u305F\u3002\u6D77\u6C34\u98F2\u307F\u3059\u304E\u30661\u65E5\u534A\u3067\u30AE\u30D6\u30A2\u30C3\u30D7\u3057\u306618\u6B73\u306B\u3057\u3066\u4F53\u529B\u306E\u9650\u754C\u3092\u611F\u3058\u305F\u3002",image:8},{location:"\u30ED\u30B5\u30F3\u30BC\u30EB\u30B9",short:"la",date:"2020\u5E742\u6708",description:"\u30B3\u30ED\u30CA\u76F4\u524D\u306B\u6ED1\u308A\u8FBC\u307F\u3067\u884C\u3063\u305F\u4FEE\u5B66\u65C5\u884C\u3002\u672C\u5834\u306E\u30E6\u30CB\u30D0\u30FC\u30B5\u30EB\u30B9\u30BF\u30B8\u30AA\u3084\u30B5\u30F3\u30BF\u30E2\u30CB\u30AB\u3001\u30D3\u30D0\u30EA\u30FC\u30D2\u30EB\u30BA\u7B49\u6709\u540D      \u3069\u3053\u308D\u306F\u307B\u307C\u7DB2\u7F85\u3067\u304D\u305F\u4E0A\u306B\u591C\u306F\u52DD\u624B\u306B\u30DB\u30C6\u30EB\u51FA\u3066\u98EF\u98DF\u3063\u305F\u308A\u3067\u304D\u305F\u306E\u3067\u3081\u3061\u3083\u304F\u3061\u3083\u697D\u3057\u304B\u3063\u305F\u3002\u307E\u3060\u50CD\u3044\u3066\u306A\u3044\u9803\u3060\u3063\u305F\u306E\u3067      \u30A2\u30A6\u30C8\u30EC\u30C3\u30C8\u3067\u3042\u3093\u307E\u6563\u8CA1\u3067\u304D\u306A\u304B\u3063\u305F\u3051\u3069\u305D\u308C\u3092\u9664\u3051\u3070\u4EBA\u751F\u30675\u672C\u306E\u6307\u306B\u5165\u308B\u30EC\u30D9\u30EB\u3067\u6700\u9AD8\u306E\u601D\u3044\u51FA\u3060\u3063\u305F\u3002",image:32},{location:"\u30D0\u30EA",short:"bali",date:"July 2018",description:"RIMBA Jimbaran\u306A\u308B\u30EA\u30BE\u30FC\u30C8\u30DB\u30C6\u30EB\u3068\u305D\u306E\u5468\u8FBA\u306E\u89B3\u5149\u30B9\u30DD\u30C3\u30C8\u3092\u56DE\u3063\u305F\u3002\u30DB\u30C6\u30EB\u306F\u3081\u3061\u3083\u304F\u3061\u3083\u7DBA\u9E97\u3067\u89AA\u306E\u6A5F\u5ACC\u3082\u5272\u3068\u826F\u304B\u3063\u305F\u306E\u3067      \u3059\u3054\u304F\u697D\u3057\u304B\u3063\u305F\u3002\u4F55\u3092\u601D\u3063\u305F\u306E\u304B\u30D7\u30FC\u30EB\u306B\u6D6E\u304B\u3093\u3067\u305F\u30BF\u30A4\u30EB\u3092\u6301\u3061\u5E30\u3063\u3066\u4ECA\u3067\u3082\u673A\u306B\u98FE\u3063\u3066\u3042\u308B\u3002",image:12}],dialog:"\u8A00\u8A9E\u3092\u65E5\u672C\u8A9E\u306B\u5909\u66F4\u3057\u307E\u3057\u305F\u3002\u4ED6\u8A00\u8A9E\u8A18\u4E8B\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u672C\u6587\u306F\u7FFB\u8A33\u3055\u308C\u307E\u305B\u3093\u3002"},t={EN:u,JP:e};export{t as l};