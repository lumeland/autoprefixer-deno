/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/text-decoration) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of s(B)) {
      !u.call(C, e) && e !== t && d(C, e, {
        get: () => B[e],
        enumerable: !(o = n(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  t,
) => (t = C != null ? l(i(C)) : {},
  p(
    B || !C || !C.__esModule
      ? d(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var a = c((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M N O",
        2052: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        2: "0B mB I n 1B 2B",
        1028:
          "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        1060: "0 1 2 3 4 J D E F A B C K L G M N O o p q r s t u v w x y z",
      },
      D: {
        2: "I n J D E F A B C K L G M N O o p q r s t u",
        226:
          "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
        2052:
          "QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        2: "I n J D 4B sB 5B 6B",
        772: "K L G kB 9B AC BC uB vB wB CC lB DC",
        804: "E F A B C 8B tB jB",
        1316: "7B",
      },
      F: {
        2: "0 1 2 3 F B C G M N O o p q r s t u v w x y z EC FC GC HC jB xB IC kB",
        226: "4 5 6 7 8 9 AB BB CB",
        2052:
          "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        2: "sB JC yB KC LC MC",
        292: "E NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 2052: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 2052: "kC" },
      P: { 2: "I lC mC", 2052: "nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 2: "wC" },
      R: { 1: "xC" },
      S: { 1028: "yC" },
    },
    B: 4,
    C: "text-decoration styling",
  };
});
var f = x(a()),
  { A: G, B: H, C: I } = f,
  { default: r, ...D } = f,
  m = r !== void 0 ? r : D;
export { G as A, H as B, I as C, m as default };
