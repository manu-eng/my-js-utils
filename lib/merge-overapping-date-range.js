const mergeIntervals = (blocks: any[]) => {
    if (blocks.length <= 0) return [];
  
    const stackOfBlock: { start: string; end: string }[] = [];
  
    blocks.sort((b1, b2) => {
      return (
        new Date(b1.start).getTime() -
        new Date(b2.start).getTime()
      );
    });
  
    stackOfBlock.push({ start: blocks[0].start, end: blocks[0].end });
  
    blocks.forEach(({ start, end }: any, index) => {
      // Skip first one as already added into blockStack
      if (index === 0) return;
      const top = stackOfBlock[stackOfBlock.length - 1];
      if (top.end < start)
        stackOfBlock.push({ start, end });
      else if (top.end < end) {
        top.end = end;
        stackOfBlock.pop();
        stackOfBlock.push(top);
      }
  
    });
    return stackOfBlock;
  };
