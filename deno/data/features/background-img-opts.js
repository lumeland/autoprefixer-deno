/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/background-img-opts) es2022 production */
var f = Object.create;
var a = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of u(B)) {
      !l.call(C, o) && o !== e && a(C, o, {
        get: () => B[o],
        enumerable: !(t = s(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var S = (
  C,
  B,
  e,
) => (e = C != null ? f(i(C)) : {},
  p(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = m((E, d) => {
  d.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B",
        36: "4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        516: "I p J D E F A B C K L",
      },
      E: {
        1: "D E F A B C K L G AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        772: "I p J 7B tB 8B 9B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z IC JC lB zB KC mB",
        2: "F GC",
        36: "HC",
      },
      G: {
        1: "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        4: "tB LC 0B NC",
        516: "MC",
      },
      H: { 132: "fC" },
      I: { 1: "H kC lC", 36: "gC", 516: "oB I jC 0B", 548: "hC iC" },
      J: { 1: "D A" },
      K: { 1: "A B C b lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS3 Background-image options",
  };
});
var r = S(A()),
  { A: F, B: G, C: H } = r,
  { default: n, ...c } = r,
  I = n !== void 0 ? n : c;
export { F as A, G as B, H as C, I as default };
