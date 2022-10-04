** make ability to remove workout 

** onClick on workout card, trigger exercise list popup
    - have a useEffect that checks if popup changes, then fetch the workout from the card




- learn how to parse data
- add github/linked icon to bottom left corner

colors for name:
text-gray-500

color for inner workout card:
bg-zinc-100

background workout container card:
bg-slate-100

  For deleting workout cards  
  // // **WIP**
  // const [enabled, setEnabled] = useState(false);
  // const triggerDelete = useCallback(() => {
  //   alert("Long pressed!");
  // }, []);
  // // Handle long press
  // const handleLongPress = useLongPress(enabled ? triggerDelete : null, {
  //   onStart: (event) => console.log("Press started"),
  // });