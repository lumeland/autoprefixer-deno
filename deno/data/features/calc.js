/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/calc) es2022 production */
var f = Object.create;
var o = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, a) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of r(B)) {
      !c.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(a = n(B, t)) || a.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? f(s(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E 1B", 260: "F", 516: "A B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B 4B",
        33: "I p J D E F A B C K L G",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O",
        33: "q r s t u v w",
      },
      E: {
        1: "D E F A B C K L G 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p 7B tB 8B",
        33: "J",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
      },
      G: {
        1: "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC",
        33: "NC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B", 132: "kC lC" },
      J: { 1: "A", 2: "D" },
      K: { 1: "b", 2: "A B C lB zB mB" },
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
    C: "calc() as CSS unit value",
  };
});
var u = m(d()),
  { A: F, B: G, C: H } = u,
  { default: l, ...p } = u,
  I = l !== void 0 ? l : p;
export { F as A, G as B, H as C, I as default };
