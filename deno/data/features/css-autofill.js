/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-autofill) es2022 production */
var f = Object.create;
var a = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of A(B)) {
      !p.call(C, t) && t !== e && a(C, t, {
        get: () => B[t],
        enumerable: !(o = r(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  e,
) => (e = C != null ? f(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var l = c((I, d) => {
  d.exports = {
    A: {
      D: {
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      L: { 33: "H" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U 3B 4B",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B 1B" },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      K: { 2: "A B C lB zB mB", 33: "b" },
      E: {
        1: "G EC vB wB xB yB nB",
        2: "FC",
        33: "I p J D E F A B C K L 7B tB 8B 9B AC BC uB lB mB CC DC",
      },
      G: {
        1: "eC vB wB xB yB nB",
        33: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC",
      },
      P: { 33: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      I: { 2: "oB I gC hC iC jC 0B", 33: "H kC lC" },
    },
    B: 6,
    C: ":autofill CSS pseudo-class",
  };
});
var u = E(l()),
  { A: S, B: m, C: x } = u,
  { default: s, ...F } = u,
  D = s !== void 0 ? s : F;
export { D as default, m as B, S as A, x as C };
