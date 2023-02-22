export const AddNoticeButton = () => {

  return <div>AddNoticeButton</div>;
  const [iconSize, setIconSize] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${theme.breakpoints.tablet[0]})`);

    const onWindowResize = () => setIconSize(media.matches ? 32 : 24);
    onWindowResize();

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [iconSize, screen]);

  return (
    <Button >
      <IconWrap>
        <AddPetCrossIcon size={iconSize} />
        <Label>Add pet</Label>
      </IconWrap>
    </Button>
  );

};
