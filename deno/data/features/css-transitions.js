/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-transitions) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = f(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(l(C)) : {},
  m(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((F, a) => {
  a.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B 4B",
        33: "p J D E F A B C K L G",
        164: "I",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "I p J D E F A B C K L G M N O q r s t u v w",
      },
      E: {
        1: "D E F A B C K L G 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        33: "J 8B",
        164: "I p 7B tB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F GC HC",
        33: "C",
        164: "B IC JC lB zB KC",
      },
      G: {
        1: "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        33: "NC",
        164: "tB LC 0B MC",
      },
      H: { 2: "fC" },
      I: { 1: "H kC lC", 33: "oB I gC hC iC jC 0B" },
      J: { 1: "A", 33: "D" },
      K: { 1: "b mB", 33: "C", 164: "A B lB zB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS3 Transitions",
  };
});
var r = p(d()),
  { A: G, B: H, C: I } = r,
  { default: n, ...D } = r,
  c = n !== void 0 ? n : D;
export { c as default, G as A, H as B, I as C };
