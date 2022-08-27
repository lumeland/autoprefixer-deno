/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-print-color-adjust) es2022 production */
var l = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var A = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of u(B)) {
      !n.call(C, e) && e !== t && r(C, e, {
        get: () => B[e],
        enumerable: !(o = s(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  t,
) => (t = C != null ? l(A(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var d = c((I, a) => {
  a.exports = {
    A: {
      D: {
        2: "I n J D E F A B C K L G M",
        33:
          "0 1 2 3 4 5 6 7 8 9 N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      L: { 33: "H" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        1: "i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB 1B 2B",
        33:
          "HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B zB" },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      K: { 2: "A B C jB xB kB", 33: "b" },
      E: {
        1: "vB wB CC lB",
        2: "I n 4B sB 5B DC",
        33: "J D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB",
      },
      G: {
        1: "vB wB lB",
        2: "sB JC yB KC",
        33: "E LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB",
      },
      P: { 33: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      I: { 2: "mB I eC fC gC hC yB", 33: "H iC jC" },
    },
    B: 6,
    C: "print-color-adjust property",
  };
});
var f = E(d()),
  { A: m, B: D, C: H } = f,
  { default: p, ...F } = f,
  K = p !== void 0 ? p : F;
export { D as B, H as C, K as default, m as A };
