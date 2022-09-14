/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css3-tabsize) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
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
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(u(C)) : {},
  m(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = i((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B 4B",
        33:
          "OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        164:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
      },
      D: {
        1: "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O q r",
        132: "0 1 2 3 4 5 6 7 8 9 s t u v w x y z AB BB CB",
      },
      E: {
        1: "L G CC DC EC vB wB xB yB nB FC",
        2: "I p J 7B tB 8B",
        132: "D E F A B C K 9B AC BC uB lB mB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F GC HC IC",
        132: "G M N O q r s t u v w x y z",
        164: "B C JC lB zB KC mB",
      },
      G: {
        1: "bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC NC",
        132: "E OC PC QC RC SC TC UC VC WC XC YC ZC aC",
      },
      H: { 164: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B", 132: "kC lC" },
      J: { 132: "D A" },
      K: { 1: "b", 2: "A", 164: "B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 164: "1C" },
    },
    B: 4,
    C: "CSS3 tab-size",
  };
});
var r = p(d()),
  { A: G, B: H, C: I } = r,
  { default: f, ...D } = r,
  b = f !== void 0 ? f : D;
export { b as default, G as A, H as B, I as C };
