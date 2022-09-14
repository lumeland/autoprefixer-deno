/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-file-selector-button) es2022 production */
var u = Object.create;
var d = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var A = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of f(B)) {
      !p.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = a(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? u(A(C)) : {},
  i(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var n = c((G, l) => {
  l.exports = {
    A: {
      D: {
        1: "Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X",
      },
      L: { 1: "H" },
      B: {
        1: "Y Z c d e f g h i j k l m n o a H",
        33: "C K L G M N O P Q R S T U V W X",
      },
      C: {
        1: "rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R 3B 4B",
      },
      M: { 1: "a" },
      A: { 2: "J D E F 1B", 33: "A B" },
      F: {
        1: "hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB",
      },
      K: { 1: "b", 2: "A B C lB zB mB" },
      E: {
        1: "G DC EC vB wB xB yB nB",
        2: "FC",
        33: "I p J D E F A B C K L 7B tB 8B 9B AC BC uB lB mB CC",
      },
      G: {
        1: "dC eC vB wB xB yB nB",
        33: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC",
      },
      P: { 1: "wC nB xC yC", 33: "I nC oC pC qC rC uB sC tC uC vC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B", 33: "kC lC" },
    },
    B: 6,
    C: "::file-selector-button CSS pseudo-element",
  };
});
var s = m(n()),
  { A: I, B: S, C: b } = s,
  { default: r, ...E } = s,
  x = r !== void 0 ? r : E;
export { b as C, I as A, S as B, x as default };
