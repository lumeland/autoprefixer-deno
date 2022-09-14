/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/user-select-none) es2022 production */
var a = Object.create;
var A = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
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
) => (e = C != null ? a(u(C)) : {},
  m(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var n = c((F, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F 1B", 33: "A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        33: "C K L G M N O",
      },
      C: {
        1: "bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        33:
          "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB 3B 4B",
      },
      D: {
        1: "PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB",
      },
      E: {
        1: "FC",
        33:
          "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB",
      },
      F: {
        1: "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB",
      },
      G: {
        33:
          "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 33: "oB I gC hC iC jC 0B kC lC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 33: "A B" },
      O: { 2: "mC" },
      P: { 1: "oC pC qC rC uB sC tC uC vC wC nB xC yC", 33: "I nC" },
      Q: { 1: "zC" },
      R: { 2: "0C" },
      S: { 33: "1C" },
    },
    B: 5,
    C: "CSS user-select: none",
  };
});
var s = p(n()),
  { A: G, B: H, C: I } = s,
  { default: r, ...D } = s,
  i = r !== void 0 ? r : D;
export { G as A, H as B, I as C, i as default };
