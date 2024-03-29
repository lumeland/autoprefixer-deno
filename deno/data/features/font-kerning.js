/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/font-kerning) es2022 production */
var a = Object.create;
var n = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== e && n(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? a(u(C)) : {},
  m(
    B || !C || !C.__esModule
      ? n(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = i((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F A B C K L G M N O q r s t u 3B 4B",
        194: "0 1 2 3 4 v w x y z",
      },
      D: {
        1: "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O q r s t u v w x y z",
        33: "0 1 2 3",
      },
      E: {
        1: "A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J 7B tB 8B 9B",
        33: "D E F AC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C G GC HC IC JC lB zB KC mB",
        33: "M N O q",
      },
      G: {
        1: "WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC NC OC",
        33: "E PC QC RC SC TC UC VC",
      },
      H: { 2: "fC" },
      I: { 1: "H lC", 2: "oB I gC hC iC jC 0B", 33: "kC" },
      J: { 2: "D", 33: "A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS3 font-kerning",
  };
});
var r = p(d()),
  { A: G, B: H, C: I } = r,
  { default: f, ...D } = r,
  c = f !== void 0 ? f : D;
export { c as default, G as A, H as B, I as C };
