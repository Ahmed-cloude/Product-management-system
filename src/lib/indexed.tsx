// export const DB_NAME = "productsDB";
// export const STORE_NAME = "products";
// export const DB_VERSION = 1;

// // فتح أو إنشاء قاعدة البيانات
// export function openDB() {
//   return new Promise((resolve, reject) => {
//     const request = indexedDB.open(DB_NAME, DB_VERSION);

//     request.onupgradeneeded = (event) => {
//       const db = event.target.result;
//       if (!db.objectStoreNames.contains(STORE_NAME)) {
//         db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
//       }
//     };

//     request.onsuccess = () => resolve(request.result);
//     request.onerror = () => reject(request.error);
//   });
// }

// // إضافة منتج جديد
// export async function addProduct(product) {
//   const db = await openDB();
//   return new Promise((resolve, reject) => {
//     const tx = db.transaction(STORE_NAME, "readwrite");
//     const store = tx.objectStore(STORE_NAME);
//     const request = store.add(product);

//     request.onsuccess = () => resolve(request.result);
//     request.onerror = () => reject(request.error);
//   });
// }

// // جلب كل المنتجات
// export async function getAllProducts() {
//   const db = await openDB();
//   return new Promise((resolve, reject) => {
//     const tx = db.transaction(STORE_NAME, "readonly");
//     const store = tx.objectStore(STORE_NAME);
//     const request = store.getAll();

//     request.onsuccess = () => resolve(request.result);
//     request.onerror = () => reject(request.error);
//   });
// }

// // حذف كل المنتجات
// export async function clearProducts() {
//   const db = await openDB();
//   return new Promise((resolve, reject) => {
//     const tx = db.transaction(STORE_NAME, "readwrite");
//     const store = tx.objectStore(STORE_NAME);
//     const request = store.clear();

//     request.onsuccess = () => resolve(true);
//     request.onerror = () => reject(request.error);
//   });
// }

// // حذف منتج واحد بالـ id
// export async function deleteProduct(id) {
//     const db = await openDB();
//     return new Promise((resolve, reject) => {
//       const tx = db.transaction(STORE_NAME, "readwrite");
//       const store = tx.objectStore(STORE_NAME);
//       const request = store.delete(id);
  
//       request.onsuccess = () => resolve(true);
//       request.onerror = () => reject(request.error);
//     });
//   }
  
//   // تحديث منتج
//   export async function updateProduct(product) {
//     const db = await openDB();
//     return new Promise((resolve, reject) => {
//       const tx = db.transaction(STORE_NAME, "readwrite");
//       const store = tx.objectStore(STORE_NAME);
//       const request = store.put(product); // put يعمل تحديث إذا فيه id موجود
  
//       request.onsuccess = () => resolve(true);
//       request.onerror = () => reject(request.error);
//     });
//   }