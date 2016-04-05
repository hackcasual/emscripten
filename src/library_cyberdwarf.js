var LibraryCyberdwarf = {
  metadata_llvm_dbg_value_constant: function(a,b,c,d,e) {
    if (Module["md_over"]) {
      Module["metadata_llvm_dbg_value_constant"](a,b,c,d,e);
    }
  },
  metadata_llvm_dbg_value_local: function(a,b,c,d,e) {
    if (Module["md_over"]) {
      Module["metadata_llvm_dbg_value_local"](a,b,c,d,e);
    }
  }
};

mergeInto(LibraryManager.library, LibraryCyberdwarf);
