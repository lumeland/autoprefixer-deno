/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/text-size-adjust) es2022 production */
var r = Object.create;
var o = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !S.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(d = u(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? r(n(C)) : {},
  m(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = i((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        33: "C K L G M N O",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB 3B 4B",
      },
      D: {
        1: "PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB",
        258: "x",
      },
      E: {
        2: "I p J D E F A B C K L G 7B tB 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        258: "8B",
      },
      F: {
        1: "EB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB DB FB GC HC IC JC lB zB KC mB",
      },
      G: {
        2: "tB LC 0B",
        33:
          "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 33: "a" },
      N: { 161: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I" },
      Q: { 2: "zC" },
      R: { 2: "0C" },
      S: { 2: "1C" },
    },
    B: 7,
    C: "CSS text-size-adjust",
  };
});
var f = p(a()),
  { A: F, B: G, C: H } = f,
  { default: s, ...x } = f,
  I = s !== void 0 ? s : x;
export { F as A, G as B, H as C, I as default };
