const SUPABASE_URL = "https://ugjdqumwtoqgokjpikeb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnamRxdW13dG9xZ29ranBpa2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMTgwNDQsImV4cCI6MjA4ODU5NDA0NH0.O3k9lkxewvzw3anSjJbNt9CcdkQvy5GmLnA7V7QBUs0";

const DEFAULT_PRICES = {
  C1: 97500, C2: 93500, C3: 33000, S1: 22500, S2: 22500, S3: 18500,
  G1: 20500, G2: 25500, G3: 0, G4: 0, A1: 750, A2: 750, A3: 0, A6: 0, W1: 0, W2: 0
};

const DEFAULT_MIXES = [
  { name:"1:2", code:"992", wb:41, sa:0, o_price:0, w1:275, w2:0, c1:0, c2:570, c3:0, s1:3.35, s2:0, s3:0, g1:1340, g2:0, g3:0, g4:0, a1:0, a2:0, a3:0, a6:0 },
  { name:"1:3", code:"993", wb:42, sa:0, o_price:0, w1:219, w2:0, c1:0, c2:520, c3:0, s1:2.6, s2:0, s3:0, g1:1560, g2:0, g3:0, g4:0, a1:0, a2:0, a3:0, a6:0 },
  { name:"25-18-80", code:"2781", wb:56.7, sa:60.4, o_price:0, w1:111, w2:48, c1:0, c2:252, c3:28, s1:331, s2:0, s3:773, g1:724, g2:0, g3:0, g4:0, a1:0, a2:2.8, a3:0, a6:0 },
  { name:"25-18-120", code:"2383", wb:56.7, sa:59.4, o_price:0, w1:116, w2:50, c1:0, c2:262, c3:29, s1:310, s2:0, s3:748, g1:730, g2:0, g3:0, g4:0, a1:0, a2:2.92, a3:0, a6:0 },
  { name:"25-18-150", code:"2784", wb:56.7, sa:59.6, o_price:0, w1:120, w2:52, c1:0, c2:273, c3:30, s1:317, s2:0, s3:740, g1:716, g2:0, g3:0, g4:0, a1:0, a2:3.03, a3:0, a6:0 },
  { name:"25-21-80", code:"2711", wb:53.3, sa:58.4, o_price:0, w1:112, w2:48, c1:0, c2:270, c3:30, s1:317, s2:0, s3:738, g1:752, g2:0, g3:0, g4:0, a1:0, a2:3, a3:0, a6:0 },
  { name:"25-21-120", code:"2713", wb:53.3, sa:57.4, o_price:0, w1:117, w2:50, c1:0, c2:282, c3:31, s1:306, s2:0, s3:714, g1:757, g2:0, g3:0, g4:0, a1:0, a2:3.13, a3:0, a6:0 },
  { name:"25-21-150", code:"2714", wb:53.3, sa:57.6, o_price:0, w1:121, w2:52, c1:0, c2:292, c3:32, s1:303, s2:0, s3:706, g1:713, g2:0, g3:0, g4:0, a1:0, a2:3.24, a3:0, a6:0 },
  { name:"25-24-120", code:"2743", wb:49.7, sa:55.7, o_price:0, w1:120, w2:51, c1:0, c2:310, c3:34, s1:291, s2:0, s3:678, g1:770, g2:0, g3:0, g4:0, a1:0, a2:3.44, a3:0, a6:0 },
  { name:"25-24-150", code:"2744", wb:49.7, sa:56, o_price:0, w1:123, w2:53, c1:0, c2:319, c3:35, s1:288, s2:0, s3:673, g1:755, g2:0, g3:0, g4:0, a1:0, a2:3.54, a3:0, a6:0 },
  { name:"25-24-180", code:"2745", wb:49.7, sa:57.2, o_price:0, w1:127, w2:55, c1:0, c2:330, c3:37, s1:290, s2:0, s3:676, g1:723, g2:0, g3:0, g4:0, a1:0, a2:3.67, a3:0, a6:0 },
  { name:"25-27-120", code:"2773", wb:46.1, sa:54.9, o_price:0, w1:120, w2:52, c1:0, c2:336, c3:37, s1:282, s2:0, s3:657, g1:771, g2:0, g3:0, g4:0, a1:0, a2:3.73, a3:0, a6:0 },
  { name:"25-27-150", code:"8288", wb:49.6, sa:54.1, o_price:0, w1:123, w2:53, c1:0, c2:355, c3:0, s1:280, s2:0, s3:654, g1:796, g2:0, g3:0, g4:0, a1:0, a2:3.55, a3:0, a6:0 },
  { name:"25-30-150", code:"2704", wb:42.5, sa:54.2, o_price:0, w1:126, w2:54, c1:0, c2:381, c3:42, s1:267, s2:0, s3:0, g1:759, g2:0, g3:0, g4:0, a1:0, a2:4.23, a3:0, a6:0 }
];

const DEFAULT_DISPATCH_DEFAULTS = {
  roundTrip: 30,
  driveTime: 30,
  loadWait: 0,
  unloadWait: 0,
  workHours: 7,
  loadPerTruck: 6,
  owned: 5,
  rental: 0,
  target: 100
};
let DEFAULT_DISPATCH_LOAD_PER_TRUCK = DEFAULT_DISPATCH_DEFAULTS.loadPerTruck;

async function getAdminAuth(){
  const client = getDb();
  if (!client) return null;

  const { data, error } = await client.from("admin_users").select("*").limit(1).single();

  if (error || !data) return null;
  return data;
}

function loadJson(key, fallback){ try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch(e){ return fallback; } }
function saveJson(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function isAdmin(){ return loadJson("remicon-admin-auth", false) === true; }
function logout(){ saveJson("remicon-admin-auth", false); location.reload(); }

function topNav(active){
  return `
  <div class="nav">
    <a class="${active==='home'?'active':''}" href="./index.html">🏠</a>
    <a class="${active==='dispatch'?'active':''}" href="./dispatch.html">🚚 출하량계산기</a>
    <a class="${active==='cost'?'active':''}" href="./cost.html">💰 원가계산기</a>
    <a class="${active==='admin'?'active':''}" href="./admin.html">⚙️ 관리자 관리</a>
    ${isAdmin() ? '<a href="#" onclick="logout();return false;">🔓 로그아웃</a>' : '<a href="./admin.html">🔒 관리자 로그인</a>'}
  </div>`;
}
function hero(title, sub){ return `<div class="card hero"><h1>${title}</h1><div class="sub">${sub}</div></div>`; }

let db = null;
function getDb(){
  if (!window.supabase) return null;
  if (!db && SUPABASE_URL !== "YOUR_SUPABASE_URL" && SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY") {
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return db;
}
function compareMixName(a, b){
  const aParts = String(a.name || "").split("-").map(v => Number(v) || 0);
  const bParts = String(b.name || "").split("-").map(v => Number(v) || 0);
  if (aParts[0] !== bParts[0]) return aParts[0] - bParts[0];
  if (aParts[1] !== bParts[1]) return aParts[1] - bParts[1];
  if (aParts[2] !== bParts[2]) return aParts[2] - bParts[2];
  return String(a.code || "").localeCompare(String(b.code || ""));
}
async function getMixes(){
  const client = getDb();
  if (!client) return [...DEFAULT_MIXES].sort(compareMixName);
  const { data, error } = await client.from("mixes").select("*");
  if (error || !data || !data.length) return [...DEFAULT_MIXES].sort(compareMixName);
  return [...data].sort(compareMixName);
}
async function getPrices(){
  const client = getDb();
  if (!client) return { ...DEFAULT_PRICES };
  const { data, error } = await client.from("prices").select("*");
  if (error || !data || !data.length) return { ...DEFAULT_PRICES };
  const result = {};
  data.forEach(row => { result[row.code] = Number(row.price || 0); });
  return { ...DEFAULT_PRICES, ...result };
}
function buildDispatchDefaults(raw){
  const roundTrip = Number(raw?.round_trip ?? raw?.roundTrip ?? DEFAULT_DISPATCH_DEFAULTS.roundTrip);
  let driveTime = Number(raw?.drive_time ?? raw?.driveTime);
  let loadWait = Number(raw?.load_wait ?? raw?.loadWait);
  let unloadWait = Number(raw?.unload_wait ?? raw?.unloadWait);

  if (!Number.isFinite(driveTime)) driveTime = roundTrip;
  if (!Number.isFinite(loadWait)) loadWait = 0;
  if (!Number.isFinite(unloadWait)) unloadWait = 0;

  const recomputedRoundTrip = driveTime + loadWait + unloadWait;
  const safeRoundTrip = recomputedRoundTrip > 0 ? recomputedRoundTrip : roundTrip;
  const result = {
    roundTrip: safeRoundTrip,
    driveTime,
    loadWait,
    unloadWait,
    workHours: Number(raw?.work_hours ?? raw?.workHours ?? DEFAULT_DISPATCH_DEFAULTS.workHours),
    loadPerTruck: Number(raw?.load_per_truck ?? raw?.loadPerTruck ?? DEFAULT_DISPATCH_DEFAULTS.loadPerTruck),
    owned: Number(raw?.owned ?? DEFAULT_DISPATCH_DEFAULTS.owned),
    rental: Number(raw?.rental ?? DEFAULT_DISPATCH_DEFAULTS.rental),
    target: Number(raw?.target ?? DEFAULT_DISPATCH_DEFAULTS.target)
  };
  DEFAULT_DISPATCH_LOAD_PER_TRUCK = result.loadPerTruck || DEFAULT_DISPATCH_DEFAULTS.loadPerTruck;
  return result;
}
async function getDispatchDefaults(){
  const client = getDb();
  if (!client) return buildDispatchDefaults(DEFAULT_DISPATCH_DEFAULTS);
  const { data, error } = await client.from("dispatch_settings").select("*").eq("id", 1).single();
  if (error || !data) return buildDispatchDefaults(DEFAULT_DISPATCH_DEFAULTS);
  return buildDispatchDefaults(data);
}
async function saveDispatchDefaultsToDb(d){
  const client = getDb();
  if (!client) return false;

  const payload = {
    id: 1,
    round_trip: d.roundTrip,
    drive_time: d.driveTime,
    load_wait: d.loadWait,
    unload_wait: d.unloadWait,
    work_hours: d.workHours,
    load_per_truck: d.loadPerTruck,
    owned: d.owned,
    rental: d.rental,
    target: d.target
  };

  let { error } = await client.from("dispatch_settings").upsert([payload], { onConflict: "id" });

  if (error) {
    const legacyPayload = {
      id: 1,
      round_trip: d.roundTrip,
      work_hours: d.workHours,
      load_per_truck: d.loadPerTruck,
      owned: d.owned,
      rental: d.rental,
      target: d.target
    };
    const legacyResult = await client.from("dispatch_settings").upsert([legacyPayload], { onConflict: "id" });
    error = legacyResult.error;
  }

  if (!error) {
    DEFAULT_DISPATCH_LOAD_PER_TRUCK = Number(d.loadPerTruck || DEFAULT_DISPATCH_DEFAULTS.loadPerTruck);
  }
  return !error;
}
async function updatePriceFieldDb(code, price){
  const client = getDb();
  if (!client) return false;
  const { error } = await client.from("prices").upsert([{ code, price: Number(price || 0) }], { onConflict: "code" });
  return !error;
}
async function updateMixFieldDb(id, field, value){
  const client = getDb();
  if (!client) return false;
  const patch = {};
  patch[field] = (field === "name" || field === "code") ? value : Number(value || 0);
  const { error } = await client.from("mixes").update(patch).eq("id", id);
  return !error;
}
async function addMixDb(newMix){
  const client = getDb();
  if (!client) return false;
  const { error } = await client.from("mixes").insert([newMix]);
  return !error;
}
function showSupabaseGuide(targetId){
  const el = document.getElementById(targetId);
  if (!el) return;
  if (getDb()) {
    el.className = "notice good";
    el.textContent = "Supabase 연결 상태입니다.";
  } else {
    el.className = "notice warn";
    el.textContent = "app.js 상단의 SUPABASE_URL / SUPABASE_ANON_KEY를 본인 값으로 바꾸면 DB와 연결됩니다. 현재는 fallback 데이터로 동작합니다.";
  }
}

async function saveMixDb(id, mix){
  const client = getDb();
  if (!client) return false;
  const payload = { ...mix };
  delete payload.id;
  const { error } = await client.from("mixes").update(payload).eq("id", id);
  return !error;
}
async function deleteMixDb(id){
  const client = getDb();
  if (!client) return false;
  const { error } = await client.from("mixes").delete().eq("id", id);
  return !error;
}
async function savePricesDb(prices){
  const client = getDb();
  if (!client) return false;
  const rows = Object.entries(prices).map(([code, price]) => ({ code, price: Number(price || 0) }));
  const { error } = await client.from("prices").upsert(rows, { onConflict: "code" });
  return !error;
}
