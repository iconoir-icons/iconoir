import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LinkedIn extends StatelessWidget {
  const LinkedIn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LinkedIn.svg');
}
