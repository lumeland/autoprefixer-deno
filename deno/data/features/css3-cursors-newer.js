/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css3-cursors-newer) es2022 production */
var a = Object.create;
var r = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, o, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of m(B)) {
      !l.call(C, e) && e !== o && r(C, e, {
        get: () => B[e],
        enumerable: !(t = f(B, e)) || t.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  o,
) => (o = C != null ? a(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var d = S((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        33: "2B oB I p J D E F A B C K L G M N O q r s t u 3B 4B",
      },
      D: {
        1: "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "0 1 2 3 4 5 6 7 I p J D E F A B C K L G M N O q r s t u v w x y z",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        33: "I p J D E 7B tB 8B 9B AC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 C v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z KC mB",
        2: "F B GC HC IC JC lB zB",
        33: "G M N O q r s t u",
      },
      G: {
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 2: "mC" },
      P: { 2: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 2: "zC" },
      R: { 2: "0C" },
      S: { 2: "1C" },
    },
    B: 4,
    C: "CSS3 Cursors: zoom-in & zoom-out",
  };
});
var u = p(d()),
  { A: G, B: H, C: I } = u,
  { default: s, ...D } = u,
  c = s !== void 0 ? s : D;
export { c as default, G as A, H as B, I as C };
