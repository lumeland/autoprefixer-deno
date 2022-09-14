/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/mdn-text-decoration-color) es2022 production */
var p = Object.create;
var r = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var f = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of c(B)) {
      !s.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = A(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? p(f(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = u((G, d) => {
  d.exports = {
    A: {
      D: {
        1: "SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
      },
      L: { 1: "H" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p 3B 4B",
        33: "0 1 2 3 4 5 6 J D E F A B C K L G M N O q r s t u v w x y z",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B 1B" },
      F: {
        1: "FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB DB EB GC HC IC JC lB zB KC mB",
      },
      K: { 1: "b", 2: "A B C lB zB mB" },
      E: {
        1: "K L G mB CC DC EC vB wB xB yB nB",
        2: "I p J D 7B tB 8B 9B AC FC",
        33: "E F A B C BC uB lB",
      },
      G: {
        1: "XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC NC OC",
        33: "E PC QC RC SC TC UC VC WC",
      },
      P: { 1: "pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I nC oC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
    },
    B: 6,
    C: "text-decoration-color property",
  };
});
var n = x(a()),
  { A: I, B: m, C: D } = n,
  { default: l, ...E } = n,
  H = l !== void 0 ? l : E;
export { D as C, H as default, I as A, m as B };
