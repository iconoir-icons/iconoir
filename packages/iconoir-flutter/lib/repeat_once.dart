import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RepeatOnce extends StatelessWidget {
  const RepeatOnce({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RepeatOnce.svg');
}
