const metaDataPagination = (currentPage, postsPerPage) => {
  const notes = {
    lastPostIdx: currentPage * postsPerPage,
    firstPostIdx: function(postsPerPage) {
      return this.lastPostIdx - postsPerPage;
    },
  };
  return notes;
};
export default metaDataPagination;
