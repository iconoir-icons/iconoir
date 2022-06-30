import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PasteClipboard extends StatelessWidget {
  const PasteClipboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PasteClipboard.svg');
}
