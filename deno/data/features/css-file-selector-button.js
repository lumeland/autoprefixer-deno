/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-file-selector-button) es2022 production */
var u = Object.create;
var l = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var A = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !p.call(C, t) && t !== e && l(C, t, {
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
      ? l(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var f = c((G, d) => {
  d.exports = {
    A: {
      D: {
        1: "Y Z c d e f g h i j k l a m H qB rB 3B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X",
      },
      L: { 1: "H" },
      B: {
        1: "Y Z c d e f g h i j k l a m H",
        33: "C K L G M N O P Q R S T U V W X",
      },
      C: {
        1: "pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R 1B 2B",
      },
      M: { 1: "a" },
      A: { 2: "J D E F zB", 33: "A B" },
      F: {
        1: "fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB",
      },
      K: { 1: "b", 2: "A B C jB xB kB" },
      E: {
        1: "G AC BC uB vB wB CC lB",
        2: "DC",
        33: "I n J D E F A B C K L 4B sB 5B 6B 7B 8B tB jB kB 9B",
      },
      G: {
        1: "bC cC uB vB wB lB",
        33: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC",
      },
      P: { 1: "uC lB vC", 33: "I lC mC nC oC pC tB qC rC sC tC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 33: "iC jC" },
    },
    B: 6,
    C: "::file-selector-button CSS pseudo-element",
  };
});
var s = m(f()),
  { A: I, B: S, C: b } = s,
  { default: r, ...E } = s,
  D = r !== void 0 ? r : E;
export { b as C, D as default, I as A, S as B };
