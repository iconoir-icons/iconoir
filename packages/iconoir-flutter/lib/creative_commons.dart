import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CreativeCommons extends StatelessWidget {
  const CreativeCommons({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CreativeCommons.svg');
}
