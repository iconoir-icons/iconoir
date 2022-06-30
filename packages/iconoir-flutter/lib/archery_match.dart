import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArcheryMatch extends StatelessWidget {
  const ArcheryMatch({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ArcheryMatch.svg');
}
