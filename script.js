const allSpeciesData = {
    "Sammalet": [
        "karhunsammal", "rahkasammal", "metsäkerrossammal", "sulkasammal", "kynsisammal", "seinäsammal"
    ],
    "Sienet": [
        "herkkutatti", "kangastatti", "punikkitatit", "voitatti", "haaparousku", "kangaspalsamirousku",
        "karvarousku", "leppärousku", "isohapero", "kangashapero", "keltahapero", "viinihapero",
        "mustavahakas", "kehnäsieni", "mesisienet", "keltavahvero", "suppilovahvero", "mustatorvisieni",
        "lampaankääpä", "punainen kärpässieni", "pulkkosieni", "valkoinen kärpässieni", "lakritsirousku",
        "suippumyrkkyseitikki"
    ],
    "Käävät": [
        "pakurikääpä", "taulakääpä", "pökkelökääpä", "kantokääpä", "arinakääpä"
    ],
    "Jäkälät": [
        "naava", "luppo", "isohirvenjäkälä", "sormipaisukarve", "pilkkunahkajäkälä", "poronjäkälät"
    ],
    "Kalat ja ympyräsuiset": [
        "ahven", "ankerias", "harjus", "hauki", "kiiski", "kirjoeväsimppu", "kirjolohi", "kolmipiikki",
        "kuha", "kymmenpiikki", "lahna", "lohi", "made", "muikku", "mutu", "nahkiainen", "rautu",
        "salakka", "siika", "säyne", "silakka", "särki", "taimen"
    ],
    "Matelijat ja sammakkoeläimet": [
        "kyykäärme", "rantakäärme", "sisilisko", "vaskitsa", "rupikonna", "sammakko"
    ],
    "Niveljalkaiset": [
        "ampiainen", "heinäsirkka", "hepokatti", "hirvikärpänen", "huonekärpänen", "hyttynen", "hämähäkki",
        "suruvaippa", "kimalainen", "sinisiipi", "koskikorento", "maakiitäjäinen", "marjalude", "mehiläinen",
        "metsäsittiäinen", "metsätorakka", "muurahainen", "mäkäräinen", "neidonkorento", "polttiainen",
        "punkki", "päiväkorento", "raatokärpänen", "sarvijaakko", "sokkopaarma", "sudenkorento", "suppupaarma",
        "surviaissääski", "tukkimiehentäi", "turkkilo", "vesiperhonen", "ritariperhonen"
    ],
    "Linnut - Vesilinnut": ["haapana", "isokoskelo", "jouhisorsa", "kaakkuri", "kuikka", "laulujoutsen", "merihanhi", "metsähanhi", "pilkkasiipi", "härkälintu", "sinisorsa", "tavi", "telkkä", "tukkakoskelo", "tukkasotka", "uivelo"],
    "Linnut - Kahlaajat": ["kuovi", "kapustarinta", "liro", "rantasipi", "suokukko", "valkoviklo", "taivaanvuohi", "töyhtöhyyppä", "kurki"],
    "Linnut - Päivänpetolinnut": ["kalasääski", "kanahaukka", "maakotka", "merikotka", "muuttohaukka"],
    "Linnut - Kanalinnut": ["pyy", "metso", "teeri", "riekko", "fasaani"],
    "Linnut - Pöllöt": ["helmipöllö", "lapinpöllö", "suopöllö", "hiiripöllö", "varpuspöllö", "huuhkaja"],
    "Linnut - Tikat/käki/sepelkyyhky": ["palokärki", "pohjantikka", "käpytikka", "käki", "sepelkyyhky"],
    "Linnut - Lokit/Tiirat": ["kalalokki", "harmaalokki", "naurulokki", "pikkulokki", "selkälokki", "kalatiira"],
    "Linnut - Varislinnut": ["varis", "korppi", "harakka", "närhi", "kuukkeli"],
    "Linnut - Rastaat": ["mustarastas", "räkättirastas", "laulurastas", "punakylkirastas", "isokäpylintu"],
    "Linnut - Tiaiset": ["sinitiainen", "hömötiainen", "talitiainen", "töyhtötiainen"],
    "Linnut - Pääskyt/kirskulinnut": ["haarapääsky", "törmäpääsky", "räystäspääsky", "tervapääsky"],
    "Linnut - Muut pikkulinnut": ["järripeippo", "peippo", "viherpeippo", "keltasirkku", "kirjosieppo", "koskikara", "leppälintu", "pajulintu", "pulmunen", "punatulkku", "urpiainen", "tilhi", "varpunen", "västäräkki"],
    "Nisäkkäät - Pienet petoeläimet": ["ahma", "hilleri", "kärppä", "lumikko", "minkki", "näätä", "saukko"],
    "Nisäkkäät - Suuret petoeläimet": ["karhu", "ilves", "susi", "naali", "supikoira"],
    "Nisäkkäät - Jyrsijät ja myyrät": ["kotihiiri", "peltomyyrä", "metsämyyrä", "rotta", "vesimyyrä", "piisami", "majava"],
    "Nisäkkäät - Peura- ja hirvieläimet": ["hirvi", "metsäpeura", "valkohäntäpeura", "poro"],
    "Nisäkkäät - Jänikset ja niiden kaltaiset": ["jänis", "rusakko", "orava", "liito-orava"],
    "Nisäkkäät - Pienet nisäkkäät": ["metsäpäästäinen", "siili", "tunturisopuli"],
    "Nisäkkäät - Lepakot ja vesinisäkkäät": ["pohjanlepakko", "hylje", "norppa"],
    "Putkilokasvit": [
        "ahomansikka","ahomatara","aho-orvokki","ahosuolaheinä","ajuruoho","haapa","harmaaleppä","heinätähtimö","hieskoivu",
        "hiirenporras","hiirenvirna","hilla, lakka, muurain","huopaohdake","isokarpalo","pikkukarpalo","isotalvikki","jouhivihvilä",
        "juolukka","järvikaisla","järviruoko","kaarlenvaltikka","kanerva","kangasmaitikka","karhunputki","karhunruoho","kataja",
        "keltano","kevätpiippo","kiiltopaju","kirkiruoho","kissankello","kissankäpälä","koiranputki","korpiorvokki","kotipihlaja",
        "kullero","kultapiisku","kurjenjalka","kuusi","käenkaali, ketunleipä","lettovilla","lillukka","luhtavilla","lääte",
        "maariankämmekkä","maitohorsma","mesiangervo","mesimarja","metsäkurjenpolvi","metsälauha","metsämaitikka","metsäruusu",
        "metsätähti","mustikka","mänty","neidonkenkä","niittyleinikki","niittysuolaheinä","nokkonen","nuokkuhelmikkä","nuokkutalvikki",
        "nurmilauha","näsiä","ojakärsämö","ojakellukka","oravanmarja","peltosaunio, saunakukka","pietaryrtti","piharatamo",
        "pihasaunio","pihatähtimö","pikkulaukku","pohjanlumme","pohjanpaju","pohjanpunaherukka","poimulehti","pulskaneilikka",
        "pullosara","puna-ailakki","puna-apila","punakonnanmarja","puolukka","pyöreälehtikihokki","päivänkakkara","raate","raita",
        "rauduskoivu","rentukka","riekonmarja","ruohokanukka","rätvänä","rönsyleinikki","siankärsämö","sianpuolukka","silmäruoho",
        "sudenmarja","suokukka","suopursu","syysmaitiainen","tikankontti","timotei","tuomi","tupasluikka","tupasvilla","tähtitalvikki",
        "ulpukka","vadelma","vaivaiskoivu","valkoapila","vanamo","variksenmarja","villapääluikka","vilukko","voikukka","valkoyökönlehti",
        "siniyökönlehti"
    ]
};

const imageUrls = {
    "karhunsammal": "https://www.illinoiswildflowers.info/mosses/photos/cm_haircap1.jpg",
    "rahkasammal": "https://www.vastavalo.net/albums/userpics/14039/normal_kasvit232.jpg",
    "metsäkerrossammal": "https://upload.wikimedia.org/wikipedia/commons/2/20/Hylocomium_splendens_1448.JPG",
    "sulkasammal": "https://upload.wikimedia.org/wikipedia/commons/2/28/Ptilium_crista-castrensis.jpg",
    "kynsisammal": "https://i.etsystatic.com/30202383/r/il/a145ca/4925424994/il_1080xN.4925424994_6huq.jpg",
    "seinäsammal": "https://kasvio.avoin.jyu.fi/kasvit/Sein%E4sammal_PleuroziumSchreberi/3_B.jpg",
    "herkkutatti": "https://fishandcaviar.com/wp-content/uploads/2019/10/porcini-mushrooms.jpg",
    "kangastatti": "https://honest-food.net/wp-content/uploads/2023/08/young-birch-bolete-mn.jpg",
    "punikkitatit": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Leccinum_aurantiacum.jpg",
    "voitatti": "https://www.milkwood.net/wp-content/uploads/2012/05/1205-slippery-jacks-09.jpg",
    "haaparousku": "https://www.arktisetaromit.fi/binary/file/-/fid/34/",
    "kangaspalsamirousku": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Lact.ruf.jpg",
    "kangasrousku": "https://mycology.su/wp-content/uploads/2018/04/Lactarius-rufus-2014-09-10-IMG_4416-Tatiana-Bulyonkova.jpg",
    "karvarousku": "https://www.arktisetaromit.fi/binary/file/-/fid/3310",
    "leppärousku": "https://upload.wikimedia.org/wikipedia/commons/8/89/Lactarius_deliciosus.jpg",
    "isohapero": "https://www.mushroom.world/data/fungi/Russulapaludosa1.jpg",
    "kangashapero": "https://www.martat.fi/wp-content/uploads/2017/09/kangashapero_kuva_sieni.jpg",
    "keltahapero": "https://upload.wikimedia.org/wikipedia/commons/9/95/2010-08-11_Russula_claroflava_Grove._ss._Melz%2C_%26_Zv.%2C_J._Schff_98988.jpg",
    "viinihapero": "https://www.arktisetaromit.fi/binary/file/-/fid/3318",
    "mustavahakas": "https://www.mushroom.world/data/fungi/Hygrophoruscamarophyllus2.jpg",
    "kehnäsieni": "https://www.first-nature.com/fungi/images/cortinariales/cortinarius-caperatus1.jpg",
    "mesisienet": "https://cdn.mos.cms.futurecdn.net/68FRUGXrDMe3A8cR3BBPRZ.jpg",
    "keltavahvero": "https://www.arktisetaromit.fi/binary/file/-/fid/3323",
    "suppilovahvero": "https://upload.wikimedia.org/wikipedia/commons/b/be/Cantharellus_tubaeformis_G28.JPG",
    "mustatorvisieni": "https://www.wildfooduk.com/wp-content/uploads/2018/01/Tromp-Mort-1.jpg",
    "lampaankääpä": "https://www.mushroom-appreciation.com/wp-content/uploads/2023/02/2-sheep-polypore.jpg",
    "punainen kärpässieni": "https://upload.wikimedia.org/wikipedia/commons/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg",
    "pulkkosieni": "https://www.wildfooduk.com/wp-content/uploads/2018/01/False-Death-C-6.jpg",
    "valkoinen kärpässieni": "https://fairchildgarden.org/wp-content/uploads/2023/03/photo-web.jpg",
    "lakritsirousku": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Lactarius_helvus_-_Lindsey.jpg",
    "suippumyrkkyseitikki": "https://www.wildfooduk.com/wp-content/uploads/2022/03/Deadly-Webcap-3.jpg",
    "pakurikääpä": "https://swallowtail.ca/wp-content/uploads/sites/5751/2019/07/Inonotus-obliquus-chaga.jpg?w=700&h=700&zoom=2",
    "taulakääpä": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Fomes_fomentarius_2010_G2.jpg",
    "pökkelökääpä": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Piptoporus_betulinus11.JPG/1280px-Piptoporus_betulinus11.JPG",
    "kantokääpä": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Fomitopsis_pinicola_109142.jpg",
    "arinakääpä": "https://www.first-nature.com/fungi/images/hymenochaetaceae/phellinus-igniarius2.jpg",
    "naava": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Usnea_cavernosa_-_Flickr_-_pellaea.jpg",
    "luppo": "https://uploads.alaska.org/guides/alaska-species-guides/alaska-lichens/_960xAUTO_fit_center-center_65_none/alaska-species-lichensGray-Horsehair-Lichen.jpg",
    "isohirvenjäkälä": "https://www.keraaja.fi/images/tuotteet/00041-Isohirvenjakala.jpg",
    "sormipaisukarve": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hypogymnia_physodes.jpeg",
    "pilkkunahkajäkälä": "https://inaturalist-open-data.s3.amazonaws.com/photos/1666777/large.jpg",
    "poronjäkälät": "https://cdn.britannica.com/86/118086-050-23BFCB5F/Reindeer-moss.jpg",
    "ahven": "https://www.vapaa-ajankalastaja.fi/app/uploads/2024/06/Ahven-1.jpg",
    "ankerias": "https://images.cdn.yle.fi/image/upload/ar_1.7648025751113892,c_fill,g_faces,h_679,w_1200/dpr_1.0/q_auto:eco/f_auto/fl_lossy/13-3-8911773",
    "harjus": "https://kemijarvenosakaskunta.fi/wp-content/uploads/2025/05/KUVAharjus.jpg",
    "hauki": "https://upload.wikimedia.org/wikipedia/commons/9/93/Esox_lucius_ZOO_1.jpg",
    "kiiski": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Gymnocephalus_cernuus_P%C3%A4rnu_River_Estonia_2010-01-06.jpg",
    "kirjoeväsimppu": "https://suomenluonto.fi/wp-content/uploads/2023/03/kirjoevasimppu2-1600x711.jpg",
    "kirjolohi": "https://www.vapaa-ajankalastaja.fi/app/uploads/2024/06/1kirjolohi-1024x343.jpg",
    "kolmipiikki": "https://www.skes.fi/wp-content/uploads/2024/09/kolmipiikki1.jpg",
    "kuha": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Sander_lucioperca_1.jpg/1200px-Sander_lucioperca_1.jpg",
    "kymmenpiikki": "https://upload.wikimedia.org/wikipedia/commons/2/22/Pungitius_pungitius.jpg",
    "lahna": "https://www.luke.fi/sites/default/files/styles/wysiwyg_full_width/public/2023-12/lahna1.jpg?itok=R6fkj7_E",
    "lohi": "https://upload.wikimedia.org/wikipedia/commons/3/39/Salmo_salar.jpg",
    "made": "https://b2771808.smushcdn.com/2771808/wp-content/uploads/2022/12/Made_lota_lota.png?size=900x253&lossy=1&strip=1&webp=1",
    "muikku": "https://wwf.fi/app/uploads/kalaopas-7542.jpg",
    "mutu": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Rhinichthys_cobitis.jpg",
    "nahkiainen": "https://cdn.britannica.com/48/188948-050-1027795D/species-Sea-lamprey-mouth-jawless-fish-Great.jpg",
    "rautu": "https://laplandguiding.com/wp-content/uploads/2018/06/rautu.jpg",
    "salakka": "https://www.vastavalo.net/albums/userpics/13623/normal__DSC0182.jpg",
    "siika": "https://cdn.britannica.com/78/110578-050-4CE4B3FD/Whitefish-Coregonus.jpg",
    "säyne": "https://upload.wikimedia.org/wikipedia/commons/c/cd/LeuciscusIdusWindeIde56cm_21-4-2009_16-46-58.JPG",
    "silakka": "https://www.vapaa-ajankalastaja.fi/app/uploads/2024/06/Silakka-1024x624.jpg",
    "särki": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Rutilus_rutilus_by_Algirdas_cropped.jpg",
    "taimen": "https://content.osgnetworks.tv/flyfisherman/content/photos/AboutRainbowTrout-HERO-1200x800.jpg",
    "kyykäärme": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Common_European_viper_%28Vipera_berus%29_female_Pieniny.jpg/1200px-Common_European_viper_%28Vipera_berus%29_female_Pieniny.jpg",
    "rantakäärme": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Grass_snake_%28Natrix_natrix%29_Pieniny.jpg",
    "sisilisko": "https://upload.wikimedia.org/wikipedia/commons/0/09/Viviparous_lizard_%28Zootoca_vivipara%29_in_the_Aamsveen%2C_The_Netherlands.jpg",
    "vaskitsa": "https://www.wildlifetrusts.org/sites/default/files/styles/spotlight_default/public/2017-12/Slow_worm_cpt_Bruce_Shortland.JPG?h=4e026002&itok=X-YTghOW",
    "rupikonna": "https://upload.wikimedia.org/wikipedia/commons/0/08/Bufo_bufo_sitting-Iric2006.jpg",
    "sammakko": "https://upload.wikimedia.org/wikipedia/commons/3/39/European_Common_Frog_Rana_temporaria.jpg",
    "ampiainen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vespula_germanica_Richard_Bartz.jpg/960px-Vespula_germanica_Richard_Bartz.jpg",
    "heinäsirkka": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chorthippus_parallelus.jpg",
    "hepokatti": "https://kotiliesi.fi/wp-content/uploads/2017/08/hepokatti2_kotiliesi.jpg",
    "hirvikärpänen": "https://www.luke.fi/sites/default/files/styles/wide/public/2022-09/hirvik%C3%A4rp%C3%A4nen.webp?itok=2Zp7MHpk",
    "huonekärpänen": "https://upload.wikimedia.org/wikipedia/commons/1/14/Common_house_fly%2C_Musca_domestica.jpg",
    "hyttynen": "https://hyonteismaailma.fi/wp-content/uploads/2020/03/hyttynen_2-1200x824.jpg",
    "hämähäkki": "https://upload.wikimedia.org/wikipedia/commons/2/26/Araneae3.jpg",
    "suruvaippa": "https://upload.wikimedia.org/wikipedia/commons/9/99/The_Mourning_Cloak_%2823369139485%29.jpg",
    "kimalainen": "https://www.extermpro.com/wp-content/uploads/2019/12/bumble-bee-1080x1080.jpg",
    "sinisiipi": "https://www.suomen-perhoset.fi/wp-content/uploads/2024/05/Kannussinisiipi-hero4.jpg",
    "koskikorento": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Pteronarcyidae_a.JPG",
    "maakiitäjäinen": "https://eorganic.org/sites/eorganic.info/files/u461/Ground%20Beetle%20article%20fig%202.png",
    "marjalude": "https://www.otokkatieto.fi/uploads/fullscreen/marjalude.jpg",
    "mehiläinen": "https://activepestcontrol.com/wp-content/uploads/2018/11/honey-bee.jpg",
    "metsäsittiäinen": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Anoplotrupes.stercorosus.jpg",
    "metsätorakka": "https://www.otokkatieto.fi/uploads/fullscreen/metsatorakka.jpg",
    "muurahainen": "https://entomologytoday.org/wp-content/uploads/2024/09/formica-aserva.jpeg",
    "mäkäräinen": "https://upload.wikimedia.org/wikipedia/commons/2/22/Black_Fly.png",
    "neidonkorento": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Beautiful_demoiselle_%28Calopteryx_virgo%29_male_3.jpg",
    "polttiainen": "https://suomenluonto.fi/wp-content/uploads/2021/06/polttiainen.jpg",
    "punkki": "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/1800x1200_what_are_ticks_and_what_diseases_do_they_spread_bigbead.jpg",
    "päiväkorento": "https://writingnearthelake.org/wp-content/uploads/2021/08/mayfly-on-my-siding-1.jpg",
    "raatokärpänen": "https://suomenluonto.fi/wp-content/uploads/readers_images/2021/08/6-2000x1333.jpg",
    "sarvijaakko": "https://image.laji.fi/MM.268375/Acanthocinus_aedilis_05.jpg",
    "sokkopaarma": "https://warehouse1.indicia.org.uk/upload/o_1i1kj5l3ffaefublg1r7l1a108.jpeg",
    "sudenkorento": "https://pestie.com/pest-illustrations/700-FBFBFB/dragonfly.jpg",
    "suppupaarma": "https://image.laji.fi/MM.155141/AA_100714_X56_185548_Haem_pluv_Homo_sapi_large.jpg",
    "surviaissääski": "https://content.ces.ncsu.edu/media/images/chironomid.jpg",
    "tukkimiehentäi": "https://image.laji.fi/MM.269116/Hylobius_abietis_06.jpg",
    "turkkilo": "https://suomenluonto.fi/wp-content/uploads/2022/11/tutkijaturkkilo-tapio-kujala-1000x697.jpg",
    "vesiperhonen": "https://suomenluonto.fi/wp-content/uploads/2017/11/IMG_7253-1600x996.jpg",
    "ritariperhonen": "https://upload.wikimedia.org/wikipedia/commons/8/8e/PapilioMachaon2016_001.JPG",
    "pilkkasiipi": "https://suomenluonto.fi/wp-content/uploads/2022/06/pilkkasiipi_anne_keskiviikka-1600x991.jpeg",
    "metso": "Tetrao urogallus", // This is a scientific name, will need to be handled by API fetch
    "kuovi": "Numenius arquata", // Scientific name
    "harakka": "https://upload.wikimedia.org/wikipedia/commons/4/42/Sroka_Pica_Pica_II.jpg",
    "käki": "https://www.vaasa.fi/app/uploads/2019/09/458dead9-luontosivut.jpg",
    "merikotka": "https://suomenluonto.fi/wp-content/uploads/2022/01/merikotka.jpg",
    "tukkakoskelo": "https://kalassa.net/kalapedia/images/1/1a/Tukkakoskelo1.jpg",
    "isokäpylintu": "https://www.birdphoto.fi/arto/wk14-2013/1314.jpg",
    "hilleri": "Mustela putorius", // Scientific name
    "karhu": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Brown_bear_%28Ursus_arctos%29%2C_Viiksimo%2C_Kainuu_region%2C_Finland%2C_16_June_2018_%2843094873292%29.jpg/1280px-Brown_bear_%28Ursus_arctos%29%2C_Viiksimo%2C_Kainuu_region%2C_Finland%2C_16_June_2018_%2843094873292%29.jpg",
    "hirvi": "Alces alces", // Scientific name
    "susi": "https://images.sanoma-sndp.fi/2004ea6fe488b8e0b14f1cd265db00a2.jpg/normal/1920.avif",
    "naali": "https://assets.apu.fi/vqd9tl2q3uk2/7p0Fev0otb65Gw2MmshorU/89f951e47f66ec4db167bae38a14fe26/Naali-Kristine-Ulvlund-Apu322022_1955408__1__5LASK.jpg?w=1080&q=75",
    "ilves": "https://www.suurpedot.fi/media/kuvat/ilves/cache/ilves_katselee_hannuhuttu-780x440,c,q=85.jpg",
    "ahma": "https://korkeasaari.fi/wp-content/uploads/2024/10/Otsikkokuva_ahma_20241025_2560x1440px-1920x1080.jpg",
    "näätä": "https://www.tiedonportailla.fi//naata/naata101.jpg",
    "orava": "https://suomenluonto.fi/wp-content/uploads/2019/11/DSC_7789-2-1000x666.jpg",
    "poro": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/20070818-0001-strolling_reindeer.jpg/1280px-20070818-0001-strolling_reindeer.jpg",
    "hylje": "https://www.sll.fi/wp-content/uploads/2024/08/harmaahylje-niklas-sjoblom-web.jpg",
    "liito-orava": "https://www.tiedonportailla.fi/liitoorava/kuva1.jpg",
    "siili": "https://vahvike.fi/app/uploads/2022/12/13_Siili_Alexas_Fotos_LK-scaled.jpg",
    "metsäpeura": "https://images.cdn.yle.fi/image/upload/ar_1.7769376039505005,c_fill,g_faces,h_675,w_1200/dpr_2.0/q_auto:eco/f_auto/fl_lossy/13-3-5369924",
    "jänis": "Lepus timidus", // Scientific name
    "majava": "Castor fiber", // Scientific name
    "voikukka": "https://i.media.fi/incoming/bawa09/1169230-e1562065496860.jpg/alternates/FREE_1440/1169230-e1562065496860.jpg",
    "isokarpalo": "https://upload.wikimedia.org/wikipedia/commons/8/83/Vaccinium_oxycoccos1.jpg",
    "ajuruoho": "https://images.luontoportti.com/kIO18gzkE2VTWyx4GJvjlb0L7lSbAJsB8I900_z0KNU/resize:fit:1920:1080/watermark:1.0:noea:-105:20:0/plain/s3://lportti-prod-images/ff37147b-3d33-405d-a97c-b7211f05913b@jpeg",
    "pikkukarpalo": "https://images.luontoportti.com/TRNZ-DX7KnHgHPKiIC6UMrQX7nC0NDG5W8EsLuJXQCo/resize:fit:1920:1080/watermark:1.0:noea:-105:20:0/plain/s3://lportti-prod-images/86ba8208-4fe2-4e12-8750-812379c37d8e@jpeg",
    "raita": "https://peda.net/oppimateriaalit/e-oppi/verkkokauppa/yl%C3%A4koulu/lukuvuosi-2021-2022/ebiologia-8-2021/e8n7/5-metsien-kasvit/kasvit/kuvamappi/puulajikuvia/raita:file/download/0e2d2e3bd0f0f662f26e45293afe6d0b9f434777/Raidan%20lehdet.jpg",
    "poimulehti": "https://hortapuisto.fi/wp-content/uploads/2021/05/kukkiva-poimulehti-768x1024.jpg",
    "yökönlehdet (valkoinen ja sininen)": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Linnaea_borealis_003.JPG",
    "kataja": "https://www.arktisetaromit.fi/binary/file/-/fid/208/",
    "hiirenporras": "http://virtuoosi.pkky.fi/luonnonhoito/kasvit/kuvat/Hiirenporras.jpg",
    "silmäruoho": "https://pbs.twimg.com/media/EAQYq1qX4AAYyON.jpg",
    "kanerva": "https://akaanseutu.fi/wp-content/uploads/2019/08/33Villiyrtti-Kanerva-1024x682.jpg",
    "karhunruoho": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEissQuGkNOmLsOlgHM-rzTitVCB34aJ443EU_lt_p-UXK6G7KjYk2mzgOYWc3gpMT52u3tb4UhewZl52oovW_SIbiidQxjyHYN5sxKTiYa3H65WpNrQVOg6Ur_PFn0Lxw7O9tPoqbAxTMZ7/s600/DSC_9532.jpeg",
    "haapa": "https://www.kotipuutarha.fi/wp-content/uploads/2022/12/kk-kasvi-haapa-1050NO.jpg",
    "kirkiruoho": "https://pohjolankasvienpauloissa.com/wp-content/uploads/2019/08/2gymnadenia-conopsea-ssp.-conopsea-ahokirkiruoho-9.7.2017-a-eckerc3b6.jpg?w=625"
};

// Scientific name mappings for API lookups
const scientificNameMappings = {
    "metso": "Tetrao urogallus",
    "kuovi": "Numenius arquata",
    "hilleri": "Mustela putorius",
    "hirvi": "Alces alces",
    "jänis": "Lepus timidus",
    "majava": "Castor fiber"
};

const scoreEl = document.getElementById("score");
const imageEl = document.getElementById("species-image");
const optionsContainerEl = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const searchInput = document.getElementById("species-search");
const suggestionsContainer = document.getElementById("suggestions-container");
const categorySelect = document.getElementById("category-select");
const answerInput = document.getElementById("answerInput"); // New: Direct answer input

let score = 0;
let currentSpecies;
let incorrectlyAnsweredSpecies = []; // Stores species answered incorrectly
let unansweredSpecies = []; // Stores all species not yet answered correctly

function populateCategories() {
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Kaikki lajit";
    categorySelect.appendChild(allOption);

    const linnutOption = document.createElement("option");
    linnutOption.value = "Linnut";
    linnutOption.textContent = "Linnut";
    categorySelect.appendChild(linnutOption);

    const nisakkaatOption = document.createElement("option");
    nisakkaatOption.value = "Nisäkkäät";
    nisakkaatOption.textContent = "Nisäkkäät";
    categorySelect.appendChild(nisakkaatOption);

    for (const category in allSpeciesData) {
        if (!category.startsWith("Linnut -") && !category.startsWith("Nisäkkäät -")) {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        }
    }
}

function initializeUnansweredSpecies(category = "all") {
    unansweredSpecies = [];
    incorrectlyAnsweredSpecies = []; // Clear incorrectly answered when category changes
    score = 0; // Reset score
    scoreEl.textContent = `Pisteet: ${score}`;

    if (category === "all") {
        for (const cat in allSpeciesData) {
            allSpeciesData[cat].forEach(species => {
                unansweredSpecies.push(species);
            });
        }
    } else if (category === "Linnut") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Linnut -")) {
                allSpeciesData[cat].forEach(species => {
                    unansweredSpecies.push(species);
                });
            }
        }
    } else if (category === "Nisäkkäät") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Nisäkkäät -")) {
                allSpeciesData[cat].forEach(species => {
                    unansweredSpecies.push(species);
                });
            }
        }
    } else {
        allSpeciesData[category].forEach(species => {
            unansweredSpecies.push(species);
        });
    }
    shuffleArray(unansweredSpecies);
}

async function findImage(speciesName) {
    const simplifiedName = speciesName.toLowerCase();

    // 1. Check hardcoded imageUrls
    if (imageUrls[simplifiedName]) {
        return imageUrls[simplifiedName];
    }

    // Determine search term (scientific name if available, otherwise common name)
    const searchTerm = scientificNameMappings[simplifiedName] || speciesName;

    // 2. Fetch from Wikimedia
    async function fetchWikimediaImage(term) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&pithumbsize=500&titles=${encodeURIComponent(term)}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const pages = data.query.pages;
            const firstPage = Object.values(pages)[0];
            return firstPage?.thumbnail?.source || null;
        } catch {
            return null;
        }
    }
    let imageUrl = await fetchWikimediaImage(searchTerm);
    if (imageUrl) return imageUrl;

    // 3. Fetch from iNaturalist
    async function fetchiNaturalistImage(term) {
        const url = `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(term)}&rank=species`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.results[0]?.default_photo?.medium_url || null;
        } catch {
            return null;
        }
    }
    imageUrl = await fetchiNaturalistImage(searchTerm);
    if (imageUrl) return imageUrl;

    // 4. Fetch from GBIF
    async function fetchGBIFImage(term) {
        const url = `https://api.gbif.org/v1/species/match?name=${encodeURIComponent(term)}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.usageKey) {
                const mediaUrl = `https://api.gbif.org/v1/species/${data.usageKey}/media`;
                const mediaResponse = await fetch(mediaUrl);
                const mediaData = await mediaResponse.json();
                return mediaData.results[0]?.identifier || null;
            }
        } catch {
            return null;
        }
        return null;
    }
    imageUrl = await fetchGBIFImage(searchTerm);
    if (imageUrl) return imageUrl;

    return "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"; // Default no image
}

async function nextRound() {
    optionsContainerEl.innerHTML = "";
    optionsContainerEl.style.display = "none"; // Hide options initially
    feedbackEl.textContent = ""; // Clear feedback
    answerInput.value = ""; // Clear direct answer input

    let speciesToAsk;
    let speciesListForOptions = [];

    if (unansweredSpecies.length > 0) {
        // Prioritize new questions
        speciesToAsk = unansweredSpecies.pop();
    } else if (incorrectlyAnsweredSpecies.length > 0) {
        // If all new questions are done, ask incorrectly answered ones
        const randomIndex = Math.floor(Math.random() * incorrectlyAnsweredSpecies.length);
        speciesToAsk = incorrectlyAnsweredSpecies.splice(randomIndex, 1)[0]; // Remove from incorrectly answered
    } else {
        // Game over, all questions answered correctly
        feedbackEl.textContent = "Peli ohi! Kaikki lajit arvattu oikein!";
        feedbackEl.style.color = "#2ecc71";
        return;
    }

    currentSpecies = speciesToAsk; // Set currentSpecies for the round

    // Find the category for the speciesToAsk to generate options from the same category
    const selectedCategory = categorySelect.value;
    if (selectedCategory === "all") {
        for (const cat in allSpeciesData) {
            allSpeciesData[cat].forEach(species => {
                speciesListForOptions.push(species);
            });
        }
    } else if (selectedCategory === "Linnut") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Linnut -")) {
                allSpeciesData[cat].forEach(species => {
                    speciesListForOptions.push(species);
                });
            }
        }
    } else if (selectedCategory === "Nisäkkäät") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Nisäkkäät -")) {
                allSpeciesData[cat].forEach(species => {
                    speciesListForOptions.push(species);
                });
            }
        }
    } else {
        speciesListForOptions = allSpeciesData[selectedCategory];
    }

    const imageUrl = await findImage(currentSpecies);
    imageEl.src = imageUrl;
    imageEl.alt = currentSpecies;

    const options = [currentSpecies];
    while (options.length < 3) {
        const randomSpecies = speciesListForOptions[Math.floor(Math.random() * speciesListForOptions.length)];
        if (!options.includes(randomSpecies)) {
            options.push(randomSpecies);
        }
    }

    shuffleArray(options);

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainerEl.appendChild(button);
    });
}

function showOptions() {
    optionsContainerEl.style.display = "flex"; // Show options
}

function showSpecificSpecies(speciesName) {
    optionsContainerEl.innerHTML = "";
    optionsContainerEl.style.display = "none"; // Hide options initially
    feedbackEl.textContent = "";
    answerInput.value = ""; // Clear direct answer input

    let speciesListForOptions = [];
    const selectedCategory = categorySelect.value;

    if (selectedCategory === "all") {
        for (const cat in allSpeciesData) {
            allSpeciesData[cat].forEach(species => {
                speciesListForOptions.push(species);
            });
        }
    } else if (selectedCategory === "Linnut") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Linnut -")) {
                allSpeciesData[cat].forEach(species => {
                    speciesListForOptions.push(species);
                });
            }
        }
    } else if (selectedCategory === "Nisäkkäät") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Nisäkkäät -")) {
                allSpeciesData[cat].forEach(species => {
                    speciesListForOptions.push(species);
                });
            }
        }
    } else {
        speciesListForOptions = allSpeciesData[selectedCategory];
    }

    if (!speciesListForOptions || !speciesListForOptions.includes(speciesName)) {
        console.error("Species not found in selected category:", speciesName);
        return;
    }

    currentSpecies = speciesName;
    findImage(currentSpecies).then(imageUrl => {
        imageEl.src = imageUrl;
        imageEl.alt = currentSpecies;
    });

    const options = [currentSpecies];
    while (options.length < 3) {
        const randomSpecies = speciesListForOptions[Math.floor(Math.random() * speciesListForOptions.length)];
        if (!options.includes(randomSpecies)) {
            options.push(randomSpecies);
        }
    }

    shuffleArray(options);

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainerEl.appendChild(button);
    });
}

function handleSearchInput() {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = "";

    if (query.length < 2) {
        return;
    }

    let allSpeciesFlat = [];
    const selectedCategory = categorySelect.value;

    if (selectedCategory === "all") {
        allSpeciesFlat = Object.values(allSpeciesData).flat();
    } else if (selectedCategory === "Linnut") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Linnut -")) {
                allSpeciesFlat = allSpeciesFlat.concat(allSpeciesData[cat]);
            }
        }
    } else if (selectedCategory === "Nisäkkäät") {
        for (const cat in allSpeciesData) {
            if (cat.startsWith("Nisäkkäät -")) {
                allSpeciesFlat = allSpeciesFlat.concat(allSpeciesData[cat]);
            }
        }
    } else {
        allSpeciesFlat = allSpeciesData[selectedCategory];
    }

    const filteredSpecies = allSpeciesFlat.filter(species =>
        species.toLowerCase().startsWith(query)
    );

    filteredSpecies.forEach(species => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.textContent = species;
        suggestionItem.addEventListener("click", () => {
            searchInput.value = species;
            suggestionsContainer.innerHTML = "";
            showSpecificSpecies(species);
        });
        suggestionsContainer.appendChild(suggestionItem);
    });
}

function checkAnswer(selectedOption, isDirectInput = false) {
    if (selectedOption.toLowerCase() === currentSpecies.toLowerCase()) {
        score += isDirectInput ? 1 : 0.5; // 1 point for direct input, 0.5 for multiple choice
        scoreEl.textContent = `Pisteet: ${score}`;
        feedbackEl.textContent = "OIKEIN!";
        feedbackEl.style.color = "#2ecc71"; // Green for correct

        // If answered correctly, ensure it's not in incorrectlyAnsweredSpecies
        const index = incorrectlyAnsweredSpecies.indexOf(currentSpecies);
        if (index > -1) {
            incorrectlyAnsweredSpecies.splice(index, 1);
        }

    } else {
        feedbackEl.textContent = `VÄÄRIN! Oikea vastaus: ${currentSpecies}`;
        feedbackEl.style.color = "#e74c3c"; // Red for incorrect

        // Add to incorrectlyAnsweredSpecies if not already present
        if (!incorrectlyAnsweredSpecies.includes(currentSpecies)) {
            incorrectlyAnsweredSpecies.push(currentSpecies);
        }
    }
    // Disable options after an answer is selected
    Array.from(optionsContainerEl.children).forEach(button => button.disabled = true);
    answerInput.disabled = true; // Disable direct input

    setTimeout(() => {
        answerInput.disabled = false; // Re-enable direct input for next round
        nextRound();
    }, 1500); // 1.5 second delay before next round
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event listener for direct answer input
answerInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const userInput = this.value.trim();
        if (userInput) {
            checkAnswer(userInput, true);
        }
    }
});

// Expose showOptions to global scope for onclick in HTML
window.showOptions = showOptions;

// Initial setup
const startGame = () => {
    populateCategories();
    initializeUnansweredSpecies();
    nextRound();
    searchInput.addEventListener("input", handleSearchInput);
    imageEl.addEventListener("click", showOptions);
    categorySelect.addEventListener("change", (event) => {
        initializeUnansweredSpecies(event.target.value);
        nextRound();
    });
};
window.startGame = startGame;

document.addEventListener('DOMContentLoaded', () => {
    window.startGame();
});