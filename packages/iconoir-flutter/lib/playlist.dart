import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Playlist extends StatelessWidget {
  const Playlist({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Playlist.svg');
}
