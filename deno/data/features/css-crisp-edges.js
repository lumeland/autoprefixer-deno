/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-crisp-edges) es2022 production */
var f = Object.create;
var a = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !m.call(C, t) && t !== e && a(C, t, {
        get: () => B[t],
        enumerable: !(d = i(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? f(p(C)) : {},
  u(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var s = n((F, o) => {
  o.exports = {
    A: {
      A: { 2: "J 1B", 2340: "D E F A B" },
      B: {
        2: "C K L G M N O",
        1025: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "e f g h i j k l m n o a H sB",
        2: "2B oB 3B",
        513:
          "XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d",
        545:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b 4B",
      },
      D: {
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB",
        1025:
          "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "A B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p 7B tB 8B",
        164: "J",
        4644: "D E F 9B AC BC",
      },
      F: {
        2: "F B G M N O q r s t u v w x y GC HC IC JC lB zB",
        545: "C KC mB",
        1025:
          "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B",
        4260: "MC NC",
        4644: "E OC PC QC RC",
      },
      H: { 2: "fC" },
      I: { 2: "oB I gC hC iC jC 0B kC lC", 1025: "H" },
      J: { 2: "D", 4260: "A" },
      K: { 2: "A B lB zB", 545: "C mB", 1025: "b" },
      L: { 1025: "H" },
      M: { 1: "a" },
      N: { 2340: "A B" },
      O: { 1: "mC" },
      P: { 1025: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1025: "zC" },
      R: { 1025: "0C" },
      S: { 4097: "1C" },
    },
    B: 7,
    C: "Crisp edges/pixelated images",
  };
});
var r = x(s()),
  { A: G, B: H, C: I } = r,
  { default: A, ...D } = r,
  c = A !== void 0 ? A : D;
export { c as default, G as A, H as B, I as C };
