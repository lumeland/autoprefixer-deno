/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/text-emphasis) es2022 production */
var l = Object.create;
var s = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !p.call(C, t) && t !== e && s(C, t, {
        get: () => B[t],
        enumerable: !(o = r(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? l(n(C)) : {},
  m(
    B || !C || !C.__esModule
      ? s(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = u((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "k l a m H",
        2: "C K L G M N O",
        164: "P Q R S T U V W X Y Z c d e f g h i j",
      },
      C: {
        1: "FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB 1B 2B",
        322: "EB",
      },
      D: {
        1: "k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N O o p q r s t",
        164:
          "0 1 2 3 4 5 6 7 8 9 u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j",
      },
      E: {
        1: "E F A B C K L G 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J 4B sB 5B",
        164: "D 6B",
      },
      F: {
        1: "V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U",
      },
      G: {
        1: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC LC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 164: "iC jC" },
      J: { 2: "D", 164: "A" },
      K: { 2: "A B C jB xB kB", 164: "b" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 164: "kC" },
      P: { 164: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 164: "wC" },
      R: { 164: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "text-emphasis styling",
  };
});
var f = x(a()),
  { A: G, B: H, C: I } = f,
  { default: d, ...D } = f,
  c = d !== void 0 ? d : D;
export { c as default, G as A, H as B, I as C };
