window.RHB_VISITS = window.RHB_VISITS || {};
window.RHB_VISITS["control-center"] = {
  id: "control-center",
  eyebrow: "1-3 September 2026",
  title: "ON-SITE VISITS",
  subtitle: "2026 International Forum on Taiwan Cultural Heritage",
  heroText: "Focusing on the Shuei-Jin-Jiou Mining Sites, one of the potential World Heritage sites in Taiwan.",
  heroImage: "assets/images/control-center/index_main.jpg",
  meta: [
    {label:"Emergency · Ida Tsai  +886 9 3652 5410", href:"tel:+886936525410"},
    {label:"Emergency · Pei Lin  +886 983 129 837", href:"tel:+886983129837"}
  ],
  host: {name:"Wu Chao-tan", role:"金瓜石的天公仔囝故事館創辦人", image:"assets/images/control-center/wu-chaotan.jpg", note:"由礦工後代吳朝潭與妻子王佳蘭共同創辦的在地文化空間，致力於保存金瓜石的礦業歷史、礦山生活記憶與藝術傳承。"},
  lead: "The Shuei-Jin-Jiou Mining Sites is not only a significant testament to the development of Taiwan's mining industry, but also a cultural landscape shaped by the intertwined histories of local communities, industry, transportation, and everyday life.",
  nav: [
    {id:"overview", label:"Overview"},
    {id:"system", label:"Detailed Itinerary"},
    {id:"people", label:"Accommodation"},
    {id:"response", label:"Welcome Dinner"},
    {id:"lessons", label:"Practical Information"},
    {id:"gallery", label:"Emergency Contact"}
  ],
  sectionLabels: {
    systemKicker: "Three-Day Programme",
    systemTitle: "Detailed Itinerary",
    peopleKicker: "Stay",
    peopleTitle: "Accommodation"
  },

  overviewCards: [
    {date:"September 1", title:"Shuinandong · Jinguashi · Jiufen", note:"Mining Heritage Landscape Visit"},
    {date:"September 2", title:"Houtong · Shifen", note:"Coal Mining Heritage Visit"},
    {date:"September 3 Morning", title:"National Railway Museum", note:"Railway Industrial Heritage Visit"},
    {date:"September 3 Afternoon", title:"International Experts Exchange Meeting", note:"Discussion and Knowledge Exchange"}
  ],

  detailedItinerary: [
    {
      label:"DAY 01",
      date:"September 1",
      title:"Shuinandong · Jinguashi · Jiufen — Mining Heritage Landscape Visit",
      meta:["Private coach", "Outdoor and hillside routes", "Stay: K Hotels Keelung"],
      notice:"Meet at the AKA Hotel lobby at 08:00. Please check out before meeting. Guests are advised to carry an overnight bag; other luggage may be stored at AKA Hotel.",
      items:[
        {time:"08:00", title:"Meet at AKA Hotel Lobby", type:"meeting"},
        {time:"08:10–09:30", title:"Transfer to Shuinandong", type:"transfer"},
        {time:"09:30–09:55", title:"Shuinandong Smelter", venue:{name:"Shuinandong Smelter", description:"Also known as the Remains of the Thirteen Levels, this was once the largest ore-dressing and smelting complex serving Shuinandong, Jinguashi and Jiufen. It processed gold, silver and copper ores and remains a landmark of Taiwan’s mining landscape.", focus:"Mining Industry · Industrial Heritage · Cultural Landscape"}},
        {time:"09:55–10:00", title:"Transfer to Golden Waterfall", type:"transfer"},
        {time:"10:00–10:10", title:"Golden Waterfall", venue:{name:"Golden Waterfall", description:"Rainwater infiltrating the former mining area reacts with mineral-bearing rock and produces iron-rich acidic drainage. The water flows over the steep terrain, creating the distinctive golden-coloured landscape seen today.", focus:"Mining Environment · Natural and Industrial Landscape"}},
        {time:"10:10–10:20", title:"Transfer to Cyuanji Temple", type:"transfer"},
        {time:"10:20–11:50", title:"Jinguashi Mining Heritage Walk", note:"A guided walk linking transport infrastructure, mountain and coastal scenery, religious life, settlement history, wartime memory and miners’ welfare.", venue:{name:"Jinguashi Mining Heritage Landscape", description:"The route presents the layered history of Jinguashi through industrial facilities, community life, religious practices and the mountain-sea landscape. It highlights how mining shaped both the physical environment and local identity.", focus:"Mining Settlement · Community Memory · Cultural Landscape"}},
        {time:"11:50–13:00", title:"Lunch", type:"meal"},
        {time:"13:00–15:00", title:"Gold Museum, New Taipei City Government", note:"Including tunnel and gold-panning experiences.", venue:{name:"Gold Museum", description:"Taiwan’s first eco-museum preserves and interprets the mining history and culture of Jinguashi. The museum integrates industrial remains, settlement spaces and community heritage through exhibitions and hands-on experiences.", focus:"Eco-museum · Mining Heritage · Interpretation"}},
        {time:"15:00–15:15", title:"Transfer to Jiufen", type:"transfer"},
        {time:"15:15–17:00", title:"Jiufen Gold Ore Museum and Historic Town Walk", venue:{name:"Jiufen Gold Ore Museum", description:"Created from the ancestral home of a late veteran miner, the museum emphasises mining craftsmanship. Guided demonstrations introduce traditional carbide lamps, gold washing and historical mercury-amalgamation techniques.", focus:"Mining Craftsmanship · Community Museum · Local Memory"}},
        {time:"17:00–18:30", title:"Dinner and Informal Exchange at Jiufen Teahouse", note:"Local speciality meal boxes will be provided.", type:"meal"},
        {time:"18:30–19:10", title:"Transfer to K Hotels Keelung", type:"transfer"},
        {time:"19:10", title:"Check-in at K Hotels Keelung", type:"hotel"}
      ]
    },
    {
      label:"DAY 02",
      date:"September 2",
      title:"Houtong · Shifen — Coal Mining Heritage Visit",
      meta:["Private coach and TRA local train", "Mining-site experiences", "Welcome Dinner in Taipei"],
      notice:"Meet at the K Hotels Keelung lobby at 08:10. Please check out before meeting.",
      items:[
        {time:"08:10–09:00", title:"Transfer to Houtong", type:"transfer"},
        {time:"09:00–09:50", title:"Houtong Miners’ Culture and History Museum", venue:{name:"Houtong Miners’ Culture and History Museum", description:"Founded by retired miners, the museum documents local mining operations, miners’ lives and the formation of the settlement. It represents community-led preservation, mutual support and the regeneration of industrial heritage.", focus:"Labour Heritage · Community Action · Local Memory"}},
        {time:"09:50–10:00", title:"Walk to Houtong Station", type:"transfer"},
        {time:"10:09–10:30", title:"TRA Local Train No. 4816", location:"Houtong Station → Shifen Station", note:"Please remain with the group when boarding and alighting.", type:"train"},
        {time:"10:30–10:45", title:"Transfer to New Pingxi Coal Mine Museum", type:"transfer"},
        {time:"10:45–11:45", title:"Underground Mining Experience", note:"Mock tunnel, training tunnel and miners’ inspection room.", venue:{name:"New Pingxi Coal Mine Museum", description:"The museum preserves facilities associated with coal extraction, transport and miners’ daily life. Through tunnels, rail systems and operational spaces, visitors can understand mining production, labour conditions and safety management.", focus:"Coal Mining · Labour Environment · Safety Management"}},
        {time:"11:45–13:00", title:"Lunch", type:"meal"},
        {time:"13:00–14:00", title:"Heritage Conservation Tour and Discussion", note:"Discussion on the preservation, interpretation and adaptive reuse of the former mining site."},
        {time:"14:00–14:30", title:"Historic Mine Train Ride", note:"Ride the century-old mine train into a former mining area.", type:"train"},
        {time:"14:30–15:30", title:"Coal Preparation Plant and Local Cultural Experience", note:"An eco-friendly sky lantern activity may be arranged, subject to weather conditions."},
        {time:"15:30–16:30", title:"Return to Taipei", type:"transfer"},
        {time:"16:30–17:30", title:"Check-in and Rest at AKA Hotel", type:"hotel"},
        {time:"17:30", title:"Meet at AKA Hotel Lobby", type:"meeting"},
        {time:"17:30–18:00", title:"Transfer to Dinner Venue", type:"transfer"},
        {time:"18:00–20:30", title:"Welcome Dinner at AKA Café", type:"meal"},
        {time:"20:30", title:"Return to AKA Hotel", type:"transfer"}
      ]
    },
    {
      label:"DAY 03",
      date:"September 3",
      title:"Railway Heritage Visit and International Experts Exchange Meeting",
      meta:["Private coach", "Museum visit", "Expert exchange meeting"],
      notice:"Meet at the AKA Hotel lobby at 08:50.",
      items:[
        {section:"MORNING PROGRAMME", sectionTitle:"National Railway Museum Visit"},
        {time:"08:50", title:"Meet at AKA Hotel Lobby", type:"meeting"},
        {time:"09:00–09:30", title:"Transfer to National Railway Museum", type:"transfer"},
        {time:"09:30–11:30", title:"National Railway Museum", note:"The programme includes an approximately 10-minute train ride.", venue:{name:"National Railway Museum", description:"Located within the nationally designated Taipei Railway Workshop historic site, the museum preserves and revitalises Taiwan’s railway industrial heritage. Exhibitions, restoration workshops and operational spaces present the development of railway technology and history.", focus:"Railway Industrial Heritage · Conservation · Adaptive Reuse"}},
        {time:"11:30–12:00", title:"Transfer to NCCU Public Administration and Business Administration Education Center", type:"transfer"},
        {time:"12:00–13:00", title:"Lunch", type:"meal"},
        {section:"AFTERNOON PROGRAMME", sectionTitle:"International Experts Exchange Meeting"},
        {time:"13:00–13:10", title:"Opening Remarks", location:"Room A616, NCCU Public Administration and Business Administration Education Center"},
        {time:"13:10–13:50", title:"Session 1 · Characteristics of Taiwan’s Industrial Heritage", note:"Case sharing by a representative of Taiwan’s competent authority for industrial cultural heritage."},
        {time:"13:50–14:10", title:"Discussion and Feedback"},
        {time:"14:10–14:30", title:"Session 2 · Mining Heritage Cases in Taiwan", note:"Speaker: Lin Hsiao-wei, Convener of the Steering Committee of the Asian Network of Industrial Heritage and Professor, Department of Architecture, Chung Yuan Christian University."},
        {time:"14:30–14:50", title:"Discussion and Feedback"},
        {time:"14:50–15:00", title:"Group Photo and Closing"},
        {time:"15:00", title:"Return to AKA Hotel", type:"transfer"},
        {time:"15:30–18:00", title:"Free Time"},
        {time:"18:00–19:00", title:"Light Dinner", type:"meal"}
      ]
    }
  ],
  accommodations: [
    {
      name: "AKA Hotel",
      stay: "From arrival in Taiwan to 1 September; from 2 September until departure",
      address: "No. 187, Jinhua St., Daan Dist., Taipei City 106, Taiwan",
      phone: "+886 2 2341 8828",
      phoneHref: "tel:+886223418828",
      note: "Reception: Enter through the main entrance and take the elevator on the left to the 2nd floor.",
      mapUrl: "https://maps.app.goo.gl/XvsuMLHi2wmdtYCz8",
      initials: "AKA"
    },
    {
      name: "K Hotels Keelung",
      stay: "One night · 1 September 2026",
      address: "No. 7, Yi 1st Rd., Zhongzheng Dist., Keelung City 202, Taiwan",
      phone: "+886 2 2423 0111",
      phoneHref: "tel:+886224230111",
      note: "",
      mapUrl: "https://maps.app.goo.gl/2F8HCCM6UDPxfnvLA",
      initials: "K"
    }
  ],

  welcomeDinner: {
  title: "Welcome Dinner at AKA Cafe",
  description: "Welcome to AKA Cafe, a dining space housed in a century-old historical building in Dadaocheng. Here, guests can enjoy a meal while experiencing the unique charm of Taipei's preserved heritage and traditional architecture.",
  images: [
    {
      file: "welcome-dinner-01.jpg",
      alt: "Historic interior of AKA Cafe"
    },
    {
      file: "welcome-dinner-02.jpg",
      alt: "Courtyard view at AKA Cafe"
    },
    {
      file: "welcome-dinner-03.jpg",
      alt: "Garden and historic architecture at AKA Cafe"
    }
  ]
},
  
facts: [
  {value:20260529, display:"2026.09.01", label:"DATES", animate:false},
  {value:2, suffix:" Hours", label:"Mountain town guided"},
  {value:4, prefix:"3–", suffix:"年", label:"學徒養成期"}
],
  overview: "本次由RhB鐵路行車技術專家兼營運主管Franz Bislin接待，交流內容涵蓋列車運行監控、進站與交會調度、自動化控制、班次資訊發布、跨鐵路公司協作、行控人才培育及異常事件應變。",
  quote: "系統處理可預測的日常運轉，人員則負責不確定、跨界面與高風險的例外情境。",
  operationCards: [
    {title:"集中控制", text:"由少數行控人員集中管理多個車站，每位控制員約可負責10至12個車站。"},
    {title:"自動排程", text:"列車進站、班次排列及部分軌道安排由系統依既定編程自動處理。"},
    {title:"人工決策", text:"延誤、交會衝突、加班車與轉乘銜接等例外情境，仍由值勤主管作最終判斷。"},
    {title:"旅客資訊", text:"調度結果同步連結車站顯示與手機應用程式，發布延誤原因及後續轉乘方式。"},
    {title:"跨公司協作", text:"RhB與SBB、MGB及義大利端鐵路依責任界面分工，特殊事件仍須即時聯繫協調。"},
    {title:"人才養成", text:"透過學徒制、跨部門輪調及身心能力測試，建立高專業與高責任的行控人才。"}
  ],
  process: [
    {title:"運轉計畫", summary:"隔日班次與車輛配置預先納入整體規劃。", detail:"列車頭調度與前一日運轉準備預先納入整體計畫，使隔日各班次得以依序銜接。"},
    {title:"自動控制", summary:"系統依班表處理日常且可預測的運轉。", detail:"列車進站、班次排列及部分軌道安排由系統依既定班表自動處理，控制員持續監看運轉狀態。"},
    {title:"例外介入", summary:"控制員針對延誤與衝突重新安排。", detail:"列車過早或過晚抵達、交會衝突、加班車及轉乘旅客需要短暫等候時，由控制員重新安排進站軌道與交會順序。"},
    {title:"資訊發布", summary:"調度結果同步轉化為旅客資訊。", detail:"專責人員將調度結果、延誤原因及後續轉乘方式整合後，同步發布至車站與旅客端系統。"}
  ],
  people: [
    "RhB控制中心採學徒制與跨部門輪調。部分人員自15歲起進入公司，每週接受一日學校課程與四日現場實習，整體養成期約3至4年。由其他職務轉任者，通常仍需6至12個月訓練。",
    "除專業訓練外，行控人員還須通過醫學、心理與能力測試，以確保能在高壓、即時判斷及高度安全責任的環境中穩定工作。這套制度的核心，不只是熟悉操作介面，而是理解不同部門、站場與營運情境之間的連動關係。"
  ],
  responseCards: [
    {title:"天然災害警示", text:"落石、地滑等監測主要由政府專責機關辦理，RhB收到警示後負責停車、封鎖或調整營運。"},
    {title:"替代運輸", text:"事件處置約需1至4小時不等，必要時啟動接駁、替代運輸、退費或住宿安排。"},
    {title:"責任界面", text:"RhB與SBB、MGB及跨境車站各有控制範圍，但特殊事件仍須透過電話確認分工。"}
  ],
  lessons: [
    {title:"循序推動集中行控", text:"可先從主要交會站、運量較高區段及關鍵轉轍設備著手，逐步建立中央監看與控制能力。"},
    {title:"自動化與人工雙軌", text:"導入自動排程與電子號誌時，仍須保留人工調度、臨時列車及特殊事件的介入權限。"},
    {title:"整合旅客資訊", text:"將行控調整同步轉化為車站顯示、網頁或手機端可理解的延誤與轉乘資訊。"},
    {title:"建立人才養成路徑", text:"以跨部門輪調、情境模擬及能力測試培育行控人員，而非僅進行單一設備操作訓練。"},
    {title:"明確化外部協作", text:"針對災害監測、道路接駁、消防救援及跨機關應變，建立書面責任界面與即時聯繫機制。"},
    {title:"保存與現代化並行", text:"歷史鐵路價值應透過安全、穩定及可持續營運被延續，而非以保存之名停止系統更新。"}
  ],
  reflection: [
    "阿里山林鐵近年因應旅運需求持續增加班次，但受限於人工轉轍及手動通券閉塞行車，路線容量與交會效率仍有提升空間。RhB轄下雖有世界遺產路線，卻未停留在靜態保存思維，而是持續完成自動轉轍器、電子號誌及集中行控等現代化建設，使單線山岳鐵路在維持歷史價值的同時，仍能承擔密集班次與公共運輸責任。",
    "本次參訪最具啟發之處，在於RhB並未將自動化視為取代人力，而是重新界定人員角色：系統負責高頻、重複且可預測的作業，人員則聚焦於異常判斷、跨單位協調及旅客服務。此一人機協作模式，值得作為阿里山林鐵未來行控現代化與人才培育的參考。"
  ],
  gallery: [
    {file:"control-center-01.jpg", caption:"RhB列車控制中心採多螢幕整合介面，行控人員可同步掌握列車位置、站場狀態、影像監控及異常訊息。"},
    {file:"control-center-02.jpg", caption:"Franz Bislin說明列車運行、進站排序與旅客資訊發布流程，呈現自動化系統與人工判斷的協作模式。"},
    {file:"control-center-03.jpg", caption:"行控工作席依不同路段與任務分工配置，透過集中控制取代過去各站分散操作的作業方式。"},
    {file:"control-center-04.jpg", caption:"控制員透過圖形化介面監看列車運行狀態，並於延誤、交會衝突或轉乘需求發生時介入調整。"},
    {file:"control-center-05.jpg", caption:"參訪團觀察RhB控制中心實際作業，了解單線山岳鐵路如何藉由集中行控維持密集班次。"},
    {file:"control-center-06.jpg", caption:"控制中心除處理列車調度，亦整合班次延誤原因、轉乘方式及下一班車資訊，提供旅客即時服務。"},
    {file:"control-center-07.jpg", caption:"林業保育署與阿里山林鐵代表與RhB營運團隊交流行車控制、人才培訓及異常事件應變經驗。"},
    {file:"control-center-08.jpg", caption:"參訪團與RhB列車控制中心人員合影，為本次技術交流留下紀錄。"},
    {file:"control-center-09.jpg", caption:"Landquart車站及RhB設施外觀；該地為RhB重要營運與維修據點。"}
  ],
  tags: ["列車調度","集中行控","自動化控制","單線鐵路","旅客資訊","異常應變","人才培訓","跨公司協作","世界遺產鐵路"],
  footer: "2026 瑞士鐵道實地訪查｜RhB列車控制中心"
};
