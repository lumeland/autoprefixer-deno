/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-regions) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? s(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = i((G, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F zB", 420: "A B" },
      B: {
        2: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        420: "C K L G M N O",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB 1B 2B",
      },
      D: {
        2: "4 5 6 7 8 9 I n J D E F A B C K L AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        36: "G M N O",
        66: "0 1 2 3 o p q r s t u v w x y z",
      },
      E: {
        2: "I n J C K L G 4B sB 5B jB kB 9B AC BC uB vB wB CC lB DC",
        33: "D E F A B 6B 7B 8B tB",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z EC FC GC HC jB xB IC kB",
      },
      G: {
        2: "sB JC yB KC LC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        33: "E MC NC OC PC QC RC SC",
      },
      H: { 2: "dC" },
      I: { 2: "mB I H eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 2: "A B C b jB xB kB" },
      L: { 2: "H" },
      M: { 2: "a" },
      N: { 420: "A B" },
      O: { 2: "kC" },
      P: { 2: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 2: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 5,
    C: "CSS Regions",
  };
});
var r = D(a()),
  { A: H, B: I, C: R } = r,
  { default: f, ...E } = r,
  c = f !== void 0 ? f : E;
export { c as default, H as A, I as B, R as C };
