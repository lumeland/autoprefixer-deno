/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-read-only-write) es2022 production */
var n = Object.create;
var o = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of f(B)) {
      !S.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(d = s(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? n(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = c((E, r) => {
  r.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C",
      },
      C: {
        1: "kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        16: "2B",
        33:
          "0 1 2 3 4 5 6 7 8 9 oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB 3B 4B",
      },
      D: {
        1: "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        16: "I p J D E F A B C K L",
        132: "0 1 2 3 4 5 6 G M N O q r s t u v w x y z",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        16: "7B tB",
        132: "I p J D E 8B 9B AC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        16: "F B GC HC IC JC lB",
        132: "C G M N O q r s t zB KC mB",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        16: "tB LC",
        132: "E 0B MC NC OC PC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 16: "gC hC", 132: "oB I iC jC 0B kC lC" },
      J: { 1: "A", 132: "D" },
      K: { 1: "b", 2: "A B lB", 132: "C zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 33: "1C" },
    },
    B: 1,
    C: "CSS :read-only and :read-write selectors",
  };
});
var l = m(a()),
  { A: F, B: G, C: H } = l,
  { default: A, ...p } = l,
  I = A !== void 0 ? A : p;
export { F as A, G as B, H as C, I as default };
