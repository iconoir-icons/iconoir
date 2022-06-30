import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MissingFont extends StatelessWidget {
  const MissingFont({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MissingFont.svg');
}
