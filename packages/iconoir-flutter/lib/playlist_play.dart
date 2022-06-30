import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PlaylistPlay extends StatelessWidget {
  const PlaylistPlay({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PlaylistPlay.svg');
}
