import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Podcast extends StatelessWidget {
  const Podcast({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Podcast.svg');
}
