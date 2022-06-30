import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Flask extends StatelessWidget {
  const Flask({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Flask.svg');
}
