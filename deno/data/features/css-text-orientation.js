/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-text-orientation) es2022 production */
var f = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of l(B)) {
      !u.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(o = i(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  t,
) => (t = C != null ? f(s(C)) : {},
  m(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var d = S((E, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
        194: "9 AB BB",
      },
      D: {
        1: "JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
      },
      E: {
        1: "L G DC EC vB wB xB yB nB FC",
        2: "I p J D E F 7B tB 8B 9B AC BC",
        16: "A",
        33: "B C K uB lB mB CC",
      },
      F: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 F B C G M N O q r s t u v w x y z GC HC IC JC lB zB KC mB",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "E tB LC 0B MC NC OC PC QC RC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS text-orientation",
  };
});
var r = p(d()),
  { A: F, B: G, C: H } = r,
  { default: n, ...x } = r,
  I = n !== void 0 ? n : x;
export { F as A, G as B, H as C, I as default };
